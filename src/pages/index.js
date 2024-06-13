import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { GB3D } from "../components/HomepageHero/GB3D";
import styles from "./index.module.css";
import { HomepageSocial } from "../components/HomepageSocial";
import { useColorMode } from "@docusaurus/theme-common";
import HomepageGBSCentral from "../components/HomepageGBSCentral";
import HomepageItch from "../components/HomepageItch";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={clsx(styles.heroContent)}>
          <div className={clsx(styles.heroLeft)}>
            <p className="hero__subtitle">
              A <strong>quick</strong> and <strong>easy</strong> to use{" "}
              <strong>drag and drop</strong> retro <strong>game creator</strong>{" "}
              for your favourite handheld video game system.
            </p>
            <p>Available on Windows, Mac and Linux.</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="https://chrismaltby.itch.io/gb-studio"
              >
                Download on Itch.io
              </Link>
            </div>
          </div>
          <div className={clsx(styles.heroRight)}>
            <div className={clsx(styles.hero3D)}>
              <GB3D colorMode={colorMode} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <HomepageHeader />
      <HomepageSocial />
      <main>
        <HomepageFeatures />
      </main>
      <HomepageGBSCentral />
      <HomepageItch />
    </Layout>
  );
}
