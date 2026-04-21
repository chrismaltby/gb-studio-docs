import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import MusicFeatures from "@site/src/components/MusicFeatures";
import styles from "./music.module.css";
import { HomepageSocial } from "../components/HomepageSocial";
import { useColorMode } from "@docusaurus/theme-common";
import HomepageGBSCentral from "../components/HomepageGBSCentral";
import HomepageItch from "../components/HomepageItch";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={clsx(styles.heroContent)}>
          <div className={clsx(styles.heroLeft)}>
            <p className="hero__title">
              <strong>GBS Music</strong>
            </p>
            <p className="hero__subtitle">
              A <strong>Chiptune Music Editor</strong> by the creators of your
              favourite handheld game engine.
            </p>
            <p>No app needed, runs in your browser.</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="https://music.gbstudio.dev/"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className={clsx(styles.heroRight)}>
            <div
              style={{
                width: 560,
                aspectRatio: "1.63",
                position: "relative",
              }}
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/f4XNEazzmww?si=UjGnLkakgQZoYv2p"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
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
        <MusicFeatures />
      </main>
      <HomepageItch />
      <HomepageGBSCentral />
    </Layout>
  );
}
