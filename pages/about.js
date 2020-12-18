import React from "react";
import Head from "next/head";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

// Project components & functions
import DefaultLayout from "layouts";
import { Header } from "components/home";
import { Client } from "utils/prismicHelpers";

/**
 * About component
 */
const About = ({ doc, posts }) => {
  if (doc && doc.data) {
    return (
      <DefaultLayout>
        <Head>
          <title>{RichText.asText(doc.data.headline)}</title>
        </Head>
        <Header
          image={doc.data.image}
          headline={doc.data.headline}
          description={doc.data.description}
        />
        {/* <PostList posts={posts} /> */}
      </DefaultLayout>
    );
  }
};

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client()

  const doc = await client.getSingle("a", ref ? { ref } : null) || {}

  // const posts = await client.query(
  //   Prismic.Predicates.at("document.type", "post"), {
  //     orderings: "[my.post.date desc]",
  //     ...(ref ? { ref } : null)
  //   },
  // )

  return {
    props: {
      doc,
      // posts: posts ? posts.results : [],
      preview
    }
  }
}

export default About;