import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function HomepageGBSCentral() {
  return (
    <section className={styles.gbscentral}>
      <div className={styles.fade}>
        <div className="container">
          <div className="row">
            <div className={clsx(styles.site, "col col--6")}>
              <h3>
                Tutorials, Reviews and
                <br />
                All Things <span className="no-wrap">GB Studio</span>!
              </h3>
              <a className={styles.logo} href="https://gbstudiocentral.com/">
                <img
                  src="/img/home/gbscentral_logo.png"
                  alt="GB Studio Central"
                />
              </a>
              <a className={styles.button} href="https://gbstudiocentral.com/">
                GB Studio Central
              </a>
            </div>
            <div className={clsx(styles.magazine, "col col--6")}>
              <h3>
                Now Available in
                <br />
                Magazine Form!
              </h3>
              <a
                className={styles.logo}
                href="https://www.patreon.com/gbs_central"
              >
                <img src="/img/home/gbsmagazine.png" alt="GB Studio Magazine" />
              </a>
              <a
                className={styles.button}
                href="https://www.patreon.com/gbs_central"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
