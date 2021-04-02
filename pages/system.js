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
      <Poster image="system.png" color="#2a9d8f" />
      <Page>
        <h1>System</h1>
        <span>Last Updated 1 April, 2021</span>

        <p>Measurements are handled by a pair of sensors placed on your upper and lower back. Processing is handled by a raspberry pi placed inside the main casing, which can connect to your phone. The low-power components give the system enough battery life to make it all the way through the workday!</p>
        <p>We have a system of sensors and feedback devices all hooked up to our lightweight Raspberry Pi Zero for processing. The majority of this is contained within our snazzy casing, with only a few sensors needing integration into our vest for improved accuracy.</p>
        <p>All together our system is lightweight and powerful, capable of analysing your posture and activity and providing ample, customisable feedback.</p>

        <img src="images/system_diagram.png" alt="System Diagram" />

        <p>Using its sensors, Vitruvian can measure the angle and curve of your back, as well as any general movements you might be making. Using these values, Vitruvian can determine if you’ve been slouching or sitting still for too long and notify you.</p>
        <p>Vitruvian compares angle and curve to a set of normal values that you, the user, can calibrate in order to determine if you’re slouching. It passes movement information though a sophisticated machine learning model in order to classify active or sedentary activities. Vitruvian runs an internal timer in order to calculate how long you’ve been slouching or sitting for.</p>
        <p>Vitruvian handles on-board tracking of posture data. When you connect it to your phone, sends this data over allowing you to see your improvements over time!</p>
        <p>Using Machine Learning, Vitruvian can detect your activity behavior like sitting, standing, walking and laying etc. And then uses this information to notify about a sedentary behavior if it lasts for more than an hour.</p>

        <img src="/images/garry.png" alt="Garry wearing a product" />

        <LinksGrid exclude="SYSTEM" />

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