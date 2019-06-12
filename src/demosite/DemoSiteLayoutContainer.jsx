import React from "react";
import logo from "./logo-fsjs-dev.svg";
import logoTwitter from "./twitter.svg";
import logoGithub from "./github.svg";
import logoYoutube from "./youtube.svg";
//import styles from "./style.css";
import styles from "./DemoSiteLayoutContainer.styles";

function DemoSiteLayoutContainer({
  renderHeader,
  renderNavigation,
  renderContents
}) {
  return (
    <div style={styles.demoSiteContainer}>
      <section style={styles.drawer}>
        <header style={{ ...styles.header, ...styles.headerBrand }}>
          <img
            src={logo}
            className="app-logo"
            alt="fsjs.dev - Full Stack Javascript Development"
          />
        </header>
        <div className="navigation">{renderNavigation()}</div>
      </section>

      <section style={styles.sectionMain}>
        <header style={styles.headerTitle}>
          <div className="page-title">{renderHeader()}</div>
          <div className="external-links">
            <a href="https://github.com/fsjsd/" target="_blank">
              <img className="ext-icon" src={logoGithub} />
            </a>
            <a
              href="https://www.youtube.com/channel/UC6ndgitE_bgJ02nyrrue-1A"
              target="_blank"
            >
              <img className="ext-icon" src={logoYoutube} />
            </a>
            <a href="https://twitter.com/fullstackjsdev" target="_blank">
              <img className="ext-icon" src={logoTwitter} />
            </a>
          </div>
        </header>
        <div className="content">{renderContents()}</div>
      </section>
    </div>
  );
}

export default DemoSiteLayoutContainer;
