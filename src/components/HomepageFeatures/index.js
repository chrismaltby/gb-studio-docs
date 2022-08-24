import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const platform =
  navigator?.userAgentData?.platform || navigator?.platform || "unknown";

const showMac =
  platform.indexOf("iP") > -1 || platform.toLowerCase().indexOf("mac") > -1;

const FeatureList = [
  {
    title: "Easy to Use",
    img: showMac
      ? "/img/home/screenshot_mac_1_v3.png"
      : "/img/home/screenshot_win_1_v3.png",
    description: (
      <>
        Drag and drop game creator with simple, no progamming knowledge
        required, visual scripting. Multiple game genres supported.
      </>
    ),
  },
  {
    title: "Write Music",
    img: showMac
      ? "/img/home/screenshot_mac_3_v3.png"
      : "/img/home/screenshot_win_3_v3.png",
    description: (
      <>
        Inbuilt editor makes writing music easy. With both piano roll and
        tracker modes.
      </>
    ),
  },
  {
    title: "Build ROMs",
    img: showMac
      ? "/img/home/screenshot_mac_4_v3.png"
      : "/img/home/screenshot_win_4_v3.png",

    description: (
      <>
        Create real ROM files and play on any GB emulator. Export for web with
        great mobile controls, upload to Itch.io and share your game with the
        world.
      </>
    ),
  },
];

function Feature({ img, title, description, onOpen }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={img} alt={title} onClick={onOpen} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const [index, setIndex] = React.useState(-1);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} onOpen={() => setIndex(idx)} />
          ))}
        </div>
      </div>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={
          showMac
            ? [
                { src: "/img/home/screenshot_mac_1_v3.png" },
                { src: "/img/home/screenshot_mac_3_v3.png" },
                { src: "/img/home/screenshot_mac_4_v3.png" },
                { src: "/img/home/screenshot_mac_2_v3.png" },
              ]
            : [
                { src: "/img/home/screenshot_win_1_v3.png" },
                { src: "/img/home/screenshot_win_3_v3.png" },
                { src: "/img/home/screenshot_win_4_v3.png" },
                { src: "/img/home/screenshot_win_2_v3.png" },
              ]
        }
        plugins={[Zoom]}
      />
    </section>
  );
}
