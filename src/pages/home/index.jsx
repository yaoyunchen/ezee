import React from 'react'

import SEO from '../../components/seo';

import { GlobalStyles } from '../../styles/GlobalStyleComponent'

const content = {
  seo: {
    title: 'EzeeRiders | Home'
  }
}

const HomePage = () => (
  <GlobalStyles.Page id="home">
    <SEO title={content.seo.title} />

    {/* <Navigation /> */}

    <h1>H1</h1>

    <h2>H2</h2>

    <p>Paragraph</p>
  </GlobalStyles.Page>
)

export default HomePage
