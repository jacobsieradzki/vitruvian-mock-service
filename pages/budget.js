import React, { useState, useEffect } from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap';
import { Page, Poster } from 'components/Shared'
import Header from 'components/Header'
import Footer from 'components/Footer'
import LinksGrid from 'components/LinksGrid'
import { DiscussionEmbed } from 'disqus-react'

function Home() {

  return (
    <>
      <Header />
      <Poster image="budget.png" color="#264653" />
      <Page>
        <h1>Budget</h1>
        <p>This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... </p>
        <LinksGrid exclude="BUDGET" />

        <DiscussionEmbed 
          shortname="vitruvian"
          config={{
            title: "Vitruvian - Team Vee",
            identifier: "vitruvian",
            url: "https://vitruvian.jakeryan.co.uk",
            language: "en_GB",
          }}
        />

      </Page>
      <Footer />
    </>
  );
};

export default Home;