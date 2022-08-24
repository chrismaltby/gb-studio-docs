import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import useIsBrowser from "@docusaurus/useIsBrowser";

const FeatureList = [
  {
    title: "Easy to Use",
    macImg: "/img/home/screenshot_mac_1_v3.png",
    winImg: "/img/home/screenshot_win_1_v3.png",
    description: (
      <>
        Drag and drop game creator with simple, no progamming knowledge
        required, visual scripting. Multiple game genres supported.
      </>
    ),
  },
  {
    title: "Write Music",
    macImg: "/img/home/screenshot_mac_3_v3.png",
    winImg: "/img/home/screenshot_win_3_v3.png",
    description: (
      <>
        Inbuilt editor makes writing music easy. With both piano roll and
        tracker modes.
      </>
    ),
  },
  {
    title: "Build ROMs",
    macImg: "/img/home/screenshot_mac_4_v3.png",
    winImg: "/img/home/screenshot_win_4_v3.png",
    description: (
      <>
        Create real ROM files and play on any GB emulator. Export for web with
        great mobile controls, upload to Itch.io and share your game with the
        world.
      </>
    ),
  },
];

function Feature({ winImg, macImg, title, description, onOpen, showMac }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={showMac ? macImg : winImg} alt={title} onClick={onOpen} />
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
  const isBrowser = useIsBrowser();

  let showMac = false;
  if (isBrowser) {
    const platform =
      navigator?.userAgentData?.platform || navigator?.platform || "unknown";
    showMac =
      platform.indexOf("iP") > -1 || platform.toLowerCase().indexOf("mac") > -1;
  }

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature
              key={idx}
              {...props}
              onOpen={() => setIndex(idx)}
              showMac={showMac}
            />
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
