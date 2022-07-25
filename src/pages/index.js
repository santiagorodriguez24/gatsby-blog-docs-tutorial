import * as React from "react";
import Layout from "../components/layout";

// Key Gatsby Concept:
// Pages created in the src/pages directory use the name of the file as the route for the page.
// For example, if you had a file called src/pages/garden-gnomes.js, you could access that page at localhost:8000/garden-gnomes.

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export default IndexPage;
