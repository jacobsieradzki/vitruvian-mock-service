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
      <Poster image="evaluation.png" color="#f4a261" />
      <Page>
        <h1>Evaluation</h1>
        <p>This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... </p>
        <LinksGrid i={2} />
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