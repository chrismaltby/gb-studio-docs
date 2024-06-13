import React from "react";
import styles from "./styles.module.css";

export default function HomepageItch() {
  return (
    <section className={styles.itch}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h3>
              Over 1000 Games Made With{" "}
              <span className="no-wrap">GB Studio</span>
            </h3>
            <p>
              From <strong>weekend hackathons</strong> and{" "}
              <strong>parents teaching</strong> their kids to code, to{" "}
              <strong>professional games</strong> with{" "}
              <strong>physical releases</strong>, join a community of thousands
              of people who are making their dream games a reality!
            </p>
            <p>
              Even{" "}
              <a href="https://gbstudiocentral.com/news/mcdonalds-celebrates-grimaces-birthday-with-a-gb-studio-game/">
                McDonalds
              </a>{" "}
              and{" "}
              <a href="https://gbstudiocentral.com/news/nike-promotes-an-air-jordan-release-with-cosmic-climb/">
                Nike
              </a>{" "}
              have made their own games!
            </p>
            <a
              className={styles.button}
              href="https://itch.io/games/made-with-gb-studio"
            >
              Play on Itch.io
            </a>
            <a
              className={styles.buttonWhite}
              href="https://chrismaltby.itch.io/gb-studio"
            >
              Make Your Game
            </a>
          </div>
          <div className="col col--6">
            <div className={styles.gradient}>
              <img src="/img/home/madewith.jpg" alt="Made With GB Studio" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
