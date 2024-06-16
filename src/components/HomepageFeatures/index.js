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
    macImg: "/img/home/screenshot_mac_1_v4.png",
    winImg: "/img/home/screenshot_win_1_v4.png",
    description: (
      <>
        <p>
          <strong>Drag and drop</strong> game creator with simple, no progamming
          knowledge required, <strong>visual scripting</strong>.
        </p>
        <p>
          If your game starts to get complex there's even a built in{" "}
          <strong>debugger</strong>.
        </p>
      </>
    ),
  },
  {
    title: "Multiple Game Types",
    macImg: "/img/home/screenshot_mac_2_v4.png",
    winImg: "/img/home/screenshot_win_2_v4.png",
    description: (
      <>
        <p>
          Make <strong>top down</strong> games, <strong>platform</strong> games,{" "}
          <strong>shooters</strong> and more!
        </p>
        <p>
          You can mix types in a single game and even{" "}
          <strong>write your own</strong> by extending the engine.
        </p>
      </>
    ),
  },
  {
    title: "Write Music",
    macImg: "/img/home/screenshot_mac_3_v4.png",
    winImg: "/img/home/screenshot_win_3_v4.png",
    description: (
      <>
        <p>
          Inbuilt editor makes writing music easy. With both{" "}
          <strong>piano roll</strong> and <strong>tracker</strong> modes.
        </p>
        <p>
          Also supports using external apps like{" "}
          <a href="https://nickfa.ro/wiki/hUGETracker">hUGETracker</a>.
        </p>
      </>
    ),
  },

  {
    title: "Build ROMs",
    macImg: "/img/home/screenshot_mac_4_v4.png",
    winImg: "/img/home/screenshot_win_4_v4.png",
    description: (
      <>
        <p>
          Create <strong>real ROM files</strong> and play on any GB emulator.{" "}
        </p>
        <p>
          <b>Export for web</b> with great mobile controls, upload to{" "}
          <a href="https://itch.io/games/made-with-gb-studio">Itch.io</a> and
          share your game with the world.
        </p>
      </>
    ),
  },
];

function Feature({ winImg, macImg, title, description, onOpen, imgPlatform }) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
        {imgPlatform !== "unknown" && (
          <img
            src={imgPlatform === "mac" ? macImg : winImg}
            alt={title}
            onClick={onOpen}
          />
        )}
      </div>
      <div className="padding-horiz--md">
        <h3 className="text--center">{title}</h3>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const [index, setIndex] = React.useState(-1);
  const isBrowser = useIsBrowser();

  let imgPlatform = "unknown";
  if (isBrowser) {
    const platform =
      navigator?.userAgentData?.platform || navigator?.platform || "unknown";
    if (
      platform.indexOf("iP") > -1 ||
      platform.toLowerCase().indexOf("mac") > -1
    ) {
      imgPlatform = "mac";
    } else {
      imgPlatform = "win";
    }
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
              imgPlatform={imgPlatform}
            />
          ))}
        </div>
      </div>
      {imgPlatform !== "unknown" && (
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={
            imgPlatform === "mac"
              ? [
                  { src: "/img/home/screenshot_mac_1_v4.png" },
                  { src: "/img/home/screenshot_mac_2_v4.png" },
                  { src: "/img/home/screenshot_mac_3_v4.png" },
                  { src: "/img/home/screenshot_mac_4_v4.png" },
                ]
              : [
                  { src: "/img/home/screenshot_win_1_v4.png" },
                  { src: "/img/home/screenshot_win_2_v4.png" },
                  { src: "/img/home/screenshot_win_3_v4.png" },
                  { src: "/img/home/screenshot_win_4_v4.png" },
                ]
          }
          plugins={[Zoom]}
        />
      )}
    </section>
  );
}
