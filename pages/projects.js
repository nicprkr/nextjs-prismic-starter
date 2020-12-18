import React from "react";
import Head from "next/head";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

// Project components & functions
import DefaultLayout from "layouts";
import { Header } from "components/home";
import { ProjectList } from "components/projects";
import { Client } from "utils/prismicHelpers";

/**
 * Homepage component
 */
const Projects = ({ doc, projects }) => {
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
        <ProjectList projects={projects} />
      </DefaultLayout>
    );
  }

};

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client()

  const doc = await client.getSingle("project_home", ref ? { ref } : null) || {}

  const projects = await client.query(
    Prismic.Predicates.at("document.type", "project"), {
      orderings: "[my.project.date desc]",
      ...(ref ? { ref } : null)
    },
  )

  return {
    props: {
      doc,
      projects: projects ? projects.results : [],
      preview
    }
  }
}

export default Projects;
