import React, { useState, useEffect } from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap';
import { Page, Poster } from 'components/Shared'
import { Person, PersonContent } from 'components/Team'
import Header from 'components/Header'
import Footer from 'components/Footer'
import LinksGrid from 'components/LinksGrid'
import { DiscussionEmbed } from 'disqus-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function PersonItem({ name, role, description, image, linkedin, github }) {
  return (
    <Person>
      <img src={`/images/team/${image}.png`} alt={name} className="pp" />
      <PersonContent>
        <h3>{name}</h3>
        <span>{role}</span>
        <p>{description}</p>
        {linkedin &&
          <a href={linkedin}>
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        }
        {github &&
          <a href={github}>
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        }
      </PersonContent>
    </Person>
  )
}

function Home() {

  return (
    <>
      <Header />
      <Poster image="team.png" color="#e76f51" />
      <Page>
        <h1>Team</h1>
        <p>Due to COVID-19, Team Vee has never met! All meetings, files and discussions are held using Microsoft Teams. </p>
        <p>We followed the Agile principles, working on Sprints and tracking our tasks on Trello. Furthermore, we met every week with our mentor George, worked in smaller groups on different tasks and participate in collaborative sessions to put the segments together.</p>
        <img src="/images/team_photo.png" alt="Vitruvian Team Photo" />

        <PersonItem
          name="Jake Sieradzki"
          role="Team Leader"
          description="Created UI designs, built web-server communication for Pi and Android, built website, created Demo Video 4."
          image="jake"
          linkedin="https://www.linkedin.com/in/jacobsieradzki/"
          github="http://github.com/jacobsieradzki"
        />

        <PersonItem
          name="Anelise Ionescu"
          role="Software"
          description="Worked on building the Android Application and its communication with the main system."
          image="anelise"
          linkedin="https://www.linkedin.com/in/anelise-ionescu-496751193/"
        />

        <PersonItem
          name="Andrew Robertson"
          role="Hardware"
          description="Worked on building the hardware with the technicians and assembling different components of our system together."
          image="andrew"
          linkedin="https://www.linkedin.com/in/andrew-r-7221ab141/"
        />

        <PersonItem
          name="Alasdair MacGillivray"
          role="Slouch Detection"
          description="Worked on the algorithmic aspect of posture detection, and wrote code implementing it. "
          image="alasdair"
          linkedin="https://www.linkedin.com/in/alasdair-macgillivray-aa751616b/"
        />

        <PersonItem
          name="Mo Harah"
          role="Sedentary Detection"
          description="Worked on sedentary detection machine learning model and algorithm and integrating them with the main system."
          image="mohamad"
          linkedin="https://www.linkedin.com/in/mohamad-harah/"
          github="https://github.com/ZayRex/"
        />

        <PersonItem
          name="Vincent Wu"
          role="Simulation"
          description="Worked on the environments and controllers of simulation for software and testing needs."
          image="vincent"
        />

        <PersonItem
          name="Morgan Kane"
          role="Design"
          description="Worked on scope &amp; feature design, accessibility & inclusivity feedback, art asset production, and creation of promotional material."
          image="morgan"
          linkedin="https://www.linkedin.com/in/morgan-kane-56900520b/"
        />

        <PersonItem
          name="Yining Liu"
          role="Design"
          description="Worked on designing the appearance of the product and constructing 3D model for it."
          image="yining"
        />

        <LinksGrid exclude="TEAM" />
        
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