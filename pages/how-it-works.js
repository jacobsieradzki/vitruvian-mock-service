import React, { useState, useEffect } from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap';
import { Page, Poster } from 'components/Shared'
import Header from 'components/Header'
import Footer from 'components/Footer'
import LinksGrid from 'components/LinksGrid'

function Home() {

  return (
    <>
      <Header />
      <Poster image="how-it-works.png" color="#e9c46a" />
      <Page>
        <h1>How it Works</h1>
        <p>This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... </p>
        <LinksGrid i={1} />
      </Page>
      <Footer />
    </>
  );
};

export default Home;