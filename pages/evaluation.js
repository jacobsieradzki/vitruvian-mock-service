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

        <h3>Sedentary Detection</h3>
        <p>We ran extensive black-box and white-box accuracy testing on our Sedentary detection feature. And by combining our 87% accurate deep learning model with the high-level sedentary detection algorithm the accuracy will jump up to 100%.</p>

        <h3>Slouch Detection</h3>
        <p>We firstly carried out basic real-life testing of our system. While the outcome of these tests is not as easy to precisely analyse as Webots testing (as it is difficult to attach exact outputs to the console to the same point in a provided video to prove when detection takes place), it still serves as a useful demonstration, showing that detection occurs, and the buzzer goes off when slouching is done. This allowed us to set an improved threshold and measure the behavior of a human back slouching. Thus, we were able to refine our webots tests and provide exact values for the slouching detection algorithm.</p>
        <p>We added accelerometer noise in simulation based on the datasheet for the accelerometers used on our physical mode. Below is a graph (generated within our simulation) of the errors in our system (resulting from our introduced noise) when our model is relatively still, with only small movements to simulate a real human.</p>

        <img src="images/how_it_works_webots.jpg" alt="Webots Simulation" />
        <img src="images/how_it_works_graph.png" alt="Simulation Results in a graph" />

        <LinksGrid exclude="EVALUATION" />

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