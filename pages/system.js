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
      <Poster image="system.png" color="#2a9d8f" />
      <Page>
        <h1>System</h1>
        <span>Last updated by ### on 24 March, 2021</span>
        <p>This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... This is some text ... </p>
        <LinksGrid i={0} />
      </Page>
      <Footer />
    </>
  );
};

export default Home;