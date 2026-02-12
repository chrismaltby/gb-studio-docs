import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import {
  SRGBColorSpace,
  CustomBlending,
  OneFactor,
  SrcAlphaFactor,
} from "three";
import { Billboard } from "@react-three/drei";
import CameraControls from "camera-controls";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";

let webglAvailable = true;

try {
  var canvas = document.createElement("canvas");
  webglAvailable =
    !!window.WebGLRenderingContext &&
    (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
} catch (e) {
  webglAvailable = false;
}

CameraControls.install({ THREE });

const clamp01 = (v) => Math.max(0, Math.min(1, v));

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function Controls({
  pos = new THREE.Vector3(),
  look = new THREE.Vector3(),
  lookAt,
  destPosition,
}) {
  return useFrame((state, delta) => {
    pos.set(destPosition[0], destPosition[1], destPosition[2]);
    look.set(lookAt[0], lookAt[1], lookAt[2]);
    state.camera.position.lerp(pos, 0.05);
    state.camera.updateProjectionMatrix();
    state.camera.lookAt(look);
  });
}

const screenSize = 2.05;
const screenRatio = 160 / 144;

const CELEBRATE_DURATION_MS = 1100;
const CELEBRATE_DURATION_S = CELEBRATE_DURATION_MS / 1000;

function Scene(props) {
  const colorMode = props.colorMode;
  const isCelebrating = props.isCelebrating;
  const onCelebratingComplete = props.onCelebratingComplete;

  const ref = useRef();

  const lastIsCelebrating = useRef(false);
  const celebrateStartTime = useRef(null);

  const baseRotationZ = useRef(0);
  const basePosition = useRef(new THREE.Vector3());
  const baseScale = useRef(new THREE.Vector3(1, 1, 1));

  useFrame((state) => {
    if (!ref.current) return;

    if (isCelebrating !== lastIsCelebrating.current) {
      lastIsCelebrating.current = isCelebrating;
      if (isCelebrating) {
        baseRotationZ.current = ref.current.rotation.z;
        basePosition.current.copy(ref.current.position);
        baseScale.current.copy(ref.current.scale);
        celebrateStartTime.current = state.clock.getElapsedTime();
      }
    }

    if (isCelebrating) {
      const t = state.clock.getElapsedTime() - celebrateStartTime.current;
      if (t >= CELEBRATE_DURATION_S) {
        ref.current.rotation.z = baseRotationZ.current;
        ref.current.position.copy(basePosition.current);
        ref.current.scale.copy(baseScale.current);
        celebrateStartTime.current = null;
        onCelebratingComplete();
        return;
      }

      const progress = t / CELEBRATE_DURATION_S;
      const e = easeInOutCubic(progress);
      const envelope = Math.sin(progress * Math.PI);

      // Full clockwise rotation
      const fullTurn = Math.PI * 2;
      ref.current.rotation.z = baseRotationZ.current + -fullTurn * e;

      // Move slightly back + shrink a bit + tiny bounce
      const zPushBack = 0.9;
      const shrink = 0.18;
      const bounce = 0.18;

      ref.current.position.z = basePosition.current.z - zPushBack * envelope;
      ref.current.position.y =
        basePosition.current.y + Math.sin(progress * Math.PI) * bounce * 0.5;

      const s = 1 - shrink * envelope;
      ref.current.scale.set(
        baseScale.current.x * s,
        baseScale.current.y * s,
        baseScale.current.z * s,
      );
    }
  });

  const objUrl = useBaseUrl("/img/hero/logo_420b.obj");
  const textureUrl = useBaseUrl(
    colorMode === "dark"
      ? "/img/hero/app_icon_dark.jpg"
      : "/img/hero/app_icon.jpg",
  );
  const normalsUrl = useBaseUrl("/img/hero/normals_420_512.png");
  const roughnessUrl = useBaseUrl("/img/hero/roughness_420.png");
  const glowUrl = useBaseUrl("/img/hero/glow3.png");
  const videoUrl = useBaseUrl("/img/hero/gameplay-loop_small.mp4");

  const obj = useLoader(OBJLoader, objUrl);
  const texture = useLoader(TextureLoader, textureUrl);
  const normals = useLoader(TextureLoader, normalsUrl);
  const roughness = useLoader(TextureLoader, roughnessUrl);
  const glow = useLoader(TextureLoader, glowUrl);

  texture.colorSpace = SRGBColorSpace;

  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = videoUrl;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.playsInline = true;
    vid.play();
    return vid;
  });

  const geometry = useMemo(() => {
    let g;
    obj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c;
        g = _c.geometry;
      }
    });
    return g;
  }, [obj]);

  return (
    <group ref={ref} {...props}>
      <group rotation={[Math.PI * 0.5, 0, 0]}>
        <mesh geometry={geometry} scale={1}>
          <meshStandardMaterial
            map={texture}
            normalMap={normals}
            roughnessMap={roughness}
            roughness={0.7}
            normalScale={0.3}
          />
        </mesh>
        <mesh rotation={[-Math.PI * 0.5, 0, 0]} position={[0, 0.55, -0.26]}>
          <planeGeometry args={[screenSize, screenSize / screenRatio]} />
          <meshStandardMaterial
            roughness={0.2}
            depthTest={false}
            depthWrite={false}
          >
            <videoTexture attach="map" args={[video]} />
          </meshStandardMaterial>
        </mesh>
      </group>
      <Billboard
        position={[-1.4, 0.57, 0.56]}
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false}
      >
        <mesh>
          <planeGeometry args={[0.6, 0.6]} />
          <meshBasicMaterial
            map={glow}
            polygonOffset={true}
            polygonOffsetFactor={-500}
            depthTest={false}
            depthWrite={false}
            blending={CustomBlending}
            blendSrc={SrcAlphaFactor}
            blendDst={OneFactor}
          />
        </mesh>
      </Billboard>
    </group>
  );
}

const distance = 10;
const initialPos = [-3, -2, 9];

export const GB3D = ({ colorMode }) => {
  const [pos, setPos] = useState(initialPos);
  const [isCelebrating, setIsCelebrating] = useState(false);

  const triggerCelebrate = useCallback(() => {
    if (isCelebrating) return;
    setIsCelebrating(true);
  }, [isCelebrating]);

  const onCelebratingComplete = useCallback(() => {
    setIsCelebrating(false);
  }, []);

  const onTouchMove = useCallback(
    (e) => {
      if (isCelebrating) {
        return;
      }
      const angle =
        0.3 + -1.3 * clamp01(e.touches[0].pageX / window.innerWidth);
      setPos([
        distance * Math.sin(angle),
        -2 + clamp01(e.touches[0].pageY / window.innerHeight) * 8,
        distance * Math.cos(angle),
      ]);
    },
    [isCelebrating],
  );

  useEffect(() => {
    const onMouseMove = (e) => {
      if (isCelebrating) {
        return;
      }
      if (e.pageX >= window.innerWidth - 50) {
        setPos(initialPos);
        return;
      }
      const angle = 0.6 + -1.3 * clamp01(e.pageX / window.innerWidth);
      setPos([
        distance * Math.sin(angle),
        -2 + clamp01(e.pageY / window.innerHeight) * 8,
        distance * Math.cos(angle),
      ]);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isCelebrating]);

  const fallback = (
    <ThemedImage
      sources={{
        light: useBaseUrl("/img/hero/fallback.png"),
        dark: useBaseUrl("/img/hero/fallback-dark.png"),
      }}
    />
  );

  if (!webglAvailable) {
    return fallback;
  }

  return (
    <Suspense fallback={fallback} r3f>
      <Canvas
        camera={{
          fov: 32,
          near: 0.1,
          far: 1000,
          position: initialPos,
        }}
        onTouchMove={onTouchMove}
        onPointerDown={triggerCelebrate}
      >
        <ambientLight intensity={0.9} />
        <pointLight position={[-5, 2, -10]} intensity={1.2} decay={0.01} />
        <pointLight position={[3, 2.2, 3]} intensity={4} decay={0.000001} />
        <Scene
          colorMode={colorMode}
          isCelebrating={isCelebrating}
          onCelebratingComplete={onCelebratingComplete}
        />
        <Controls destPosition={pos} lookAt={[0, -0.1, 0]} />
      </Canvas>
    </Suspense>
  );
};
