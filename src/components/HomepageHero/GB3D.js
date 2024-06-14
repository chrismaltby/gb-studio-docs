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

function Controls({
  pos = new THREE.Vector3(),
  look = new THREE.Vector3(),
  lookAt,
  destPosition,
}) {
  return useFrame((state, delta) => {
    pos.set(destPosition[0], destPosition[1], destPosition[2]);
    look.set(lookAt[0], lookAt[1], lookAt[2]);
    state.camera.position.lerp(pos, 0.15);
    state.camera.updateProjectionMatrix();
    state.camera.lookAt(look);
  });
}

const screenSize = 2.5;
const screenRatio = 160 / 144;

function Scene(props) {
  const colorMode = props.colorMode;
  const ref = useRef();

  const obj = useLoader(OBJLoader, "/img/hero/logo9.obj");
  const texture = useLoader(
    TextureLoader,
    colorMode === "dark"
      ? "/img/hero/texture-dark.png"
      : "/img/hero/texture.png"
  );
  const normals = useLoader(TextureLoader, "/img/hero/normals.png");
  const roughness = useLoader(TextureLoader, "/img/hero/roughness4.png");
  const glow = useLoader(TextureLoader, "/img/hero/glow3.png");

  texture.colorSpace = SRGBColorSpace;

  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "/img/hero/recording.mp4";
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
        <mesh geometry={geometry} scale={20}>
          <meshStandardMaterial
            map={texture}
            normalMap={normals}
            roughnessMap={roughness}
            roughness={0.7}
            normalScale={1}
          />
        </mesh>
        <mesh position={[0, -0.7, -0.2]}>
          <boxGeometry args={[4.5, 0.8, 4]} />
          <meshStandardMaterial color="#555" roughness={0.1} />
        </mesh>
        <mesh position={[-1.2, -0.3, -2.2]}>
          <boxGeometry args={[0.8, 0.45, 0.1]} />
          <meshStandardMaterial
            color="black"
            roughness={0.1}
            polygonOffset={true}
            polygonOffsetFactor={-0.25}
          />
        </mesh>
        <mesh rotation={[-Math.PI * 0.5, 0, 0]} position={[0, 0.05, -0.35]}>
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
        position={[-1.87, 0.7, 0.1]}
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false}
      >
        <mesh>
          <planeGeometry args={[0.5, 0.5]} />
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
const angle = Math.PI * -0.2;

export const GB3D = ({ colorMode }) => {
  const [pos, setPos] = useState([
    distance * Math.sin(angle),
    3,
    distance * Math.cos(angle),
  ]);

  const onTouchMove = useCallback((e) => {
    const angle = 0.3 + -1.3 * clamp01(e.touches[0].pageX / window.innerWidth);
    setPos([
      distance * Math.sin(angle),
      -2 + clamp01(e.touches[0].pageY / window.innerHeight) * 8,
      distance * Math.cos(angle),
    ]);
  });

  useEffect(() => {
    const onMouseMove = (e) => {
      const angle =
        e.pageX < window.innerWidth - 100
          ? 0.3 + -1.3 * clamp01(e.pageX / window.innerWidth)
          : 0; // If mouse near scrollbar reset angle

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
  });

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
          fov: 35,
          near: 0.1,
          far: 1000,
          position: [distance * Math.sin(angle), 3, distance * Math.cos(angle)],
        }}
        onTouchMove={onTouchMove}
      >
        <pointLight position={[-5, 2, -10]} intensity={1.2} decay={0.01} />
        <pointLight position={[5, 0, 3]} intensity={4} decay={0.01} />
        <Scene colorMode={colorMode} />
        <Controls destPosition={pos} lookAt={[0, -0.1, 0]} />
      </Canvas>
    </Suspense>
  );
};
