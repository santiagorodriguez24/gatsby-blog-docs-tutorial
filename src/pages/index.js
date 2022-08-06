import * as React from "react";
import Layout from "../components/layout";;
import Layout from "../components/layout";

// Key Gatsby Concept:
// Gatsby automatically creates pages for components that are the default exports of files in the src/pages directory. 
// The name of the file will be used as the route for the page.
// For example, if you had a file called src/pages/garden-gnomes.js, you could access that page at localhost:8000/garden-gnomes.

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export default IndexPage;;
