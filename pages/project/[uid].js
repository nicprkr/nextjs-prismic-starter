import React from "react";
import Head from "next/head";
import { RichText } from "prismic-reactjs";

import { queryRepeatableDocuments } from 'utils/queries'

// Project components
import DefaultLayout from "layouts";
import { BackButton, SliceZone } from "components/project";

// Project functions & styles
import { Client } from "utils/prismicHelpers";
import { projectStyles } from "styles";

/**
 * Project page component
 */
const Project = ({ project }) => {
  if (project && project.data) {
    const hasTitle = RichText.asText(project.data.title).length !== 0;
    const title = hasTitle ? RichText.asText(project.data.title) : "Untitled";
    if(project){
      console.log("project");
    } 
    return (
      <DefaultLayout>
        <Head>
          <title>{title}</title>
        </Head>
        <div className="main">
          <div className="outer-container">
            <BackButton />
            <h1>{title}</h1>
          </div>
          <SliceZone sliceZone={project.data.body} />
        </div>
        <style jsx global>
          {projectStyles}
        </style>
      </DefaultLayout>
    );
  }

  return null;
};

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData
  const project = await Client().getByUID("project", params.uid, ref ? { ref } : null) || {}
  console.log(project);
  return {
    props: {
      preview,
      project
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'project')
  return {
    paths: documents.map(doc => `/project/${doc.uid}`),
    fallback: true,
  }
}

export default Project;
