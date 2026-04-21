import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function MusicFeatures() {
  return (
    <>
      <section className={clsx(styles.features)}>
        <div className="container">
          <div className="row">
            <div className={clsx("col col--7")}>
              <div className={styles.featureImg}>
                <img src="/img/music/music_views.png" alt="Views" />
              </div>
            </div>
            <div
              className={clsx("col col--5 margin-top--md margin-bottom--md")}
            >
              <div className={styles.feature}>
                <h3>Compose your way</h3>
                <p>
                  Write music in a <strong>piano roll</strong> or edit using a{" "}
                  <strong>tracker</strong> interface with{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://superdisk.github.io/hUGETracker/"
                  >
                    hUGETracker
                  </a>{" "}
                  patterns. Even supports <strong>MIDI</strong> input.
                </p>
                <p>
                  4 channels. 45 configurable <strong>8-bit instruments</strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={clsx(styles.features, styles.featuresEven)}>
        <div className="container">
          <div className="row">
            <div className={clsx("col col--7")}>
              <div className={styles.featureImg}>
                <img src="/img/music/music_responsive.png" alt="Devices" />
              </div>
            </div>
            <div
              className={clsx("col col--5 margin-top--md margin-bottom--md")}
            >
              <div className={styles.feature}>
                <h3>Write on the go</h3>
                <p>
                  Works on your <strong>laptop</strong>, <strong>tablet</strong>
                  , or <strong>phone</strong>. Start a track on one device and
                  pick it up anywhere.
                </p>
                <p>No accounts or logins. You own your files.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={clsx(styles.features)}>
        <div className="container">
          <div className="row">
            <div className={clsx("col col--7")}>
              <div className={styles.featureImg}>
                <img src="/img/music/music_export.png" alt="Export" />
              </div>
            </div>
            <div
              className={clsx("col col--5 margin-top--md margin-bottom--md")}
            >
              <div className={styles.feature}>
                <h3>Ready to share</h3>
                <p>
                  Export to <strong>MP3</strong>, <strong>WAV</strong>, or{" "}
                  <strong>FLAC</strong>. Share with friends or set your new
                  ringtone.
                </p>
                <p>
                  Drop your files straight into{" "}
                  <a href="https://gbstudio.dev">GB Studio</a> to use in an
                  8-bit <strong>game</strong> or <strong>visual album</strong>{" "}
                  playable on real GB consoles and emulators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
