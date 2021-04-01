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
      <Poster image="how-it-works.png" color="#e9c46a" />
      <Page>
        <h1>How it Works</h1>
        <span>Last Updated 1 April, 2021</span>

        <p>Vitruvian detects if you are slouching or sitting for a long period of time and provides real-time feedback as a vibration and a sound, which can be configured in the accompanying Android app. The system intelligently detects between the user quickly bending over and the user slouching for an extended period. Using machine learning, the system can even detect if you are sitting, standing, walking and more!</p>
        <p>When you install the app, we’ll help you connect to your Vitruvian device via Bluetooth and using the ID printed on the back of your device. </p>

        <iframe className="video" src="https://www.youtube.com/embed/8ZiIVc0mJHQ"></iframe>

        <p>Hold the button on the back of your Vitruvian until the light turns white and insert the device into your vest. Sit straight, press the button once and hold this position for 4 seconds until you hear an alert. </p>
        <p>Slouch forwards naturally, press the button again and hold for 4 seconds until you hear the alert. </p>
        <p>Once the device is connected, you can customize the slouch and sedentary alerts you just heard and then we can start fixing your posture!</p>
        <p>The app lets you view real-time posture scores. In the device settings, you can disable tracking when you want a break, re-calibrate the device if there are issues, configure alerts to suit you and even change your character.</p>
        <p>From the main screen you can also view common posture mistakes and fixes advice from the NHS.</p>
        <p>Finally, you can see detail posture scores and activity tracking for the current month, and average scores and tracking for previous months.</p>


        <LinksGrid exclude="HOW_IT_WORKS" />

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