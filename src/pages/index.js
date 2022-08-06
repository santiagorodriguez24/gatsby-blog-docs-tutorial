import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from 'gatsby-plugin-image'

// Key Gatsby Concept:
// Gatsby automatically creates pages for components that are the default exports of files in the src/pages directory. 
// The name of the file will be used as the route for the page.
// For example, if you had a file called src/pages/garden-gnomes.js, you could access that page at localhost:8000/garden-gnomes.

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      <br/>
      <StaticImage
        alt="Kobe Bryant shirt"
        src="../images/kobe-shirt.jpg"
      />
    </Layout>
  );
};

export default IndexPage;;
