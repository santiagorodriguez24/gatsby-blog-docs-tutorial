import * as React from "react";
import Layout from "../components/layout";

// Key Gatsby Concept:
// The Gatsby Link component provides a performance feature called preloading. This means that the resources for the linked page are requested when the link scrolls into view or when the mouse hovers on it. That way, when the user actually clicks on the link, the new page can load super quickly.
// Use the Link component for linking between pages within your site. For external links to pages not created by your Gatsby site, use the regular HTML <a> tag.

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export default AboutPage;
