import React, { useState, useEffect } from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap';
import { Page, Button } from 'components/Shared'
import { HalfHalf, HalfImage, HalfText } from 'components/Home'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { DiscussionEmbed } from 'disqus-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt, faDownload } from '@fortawesome/free-solid-svg-icons';

function Home() {

  return (
    <>
      <Header />
      <Page>
        <h1>Submissions</h1>
        <p>This page is a collection of all of <b>Team Vee's</b> submissions throughout SDP. Includes our User Guide, Demo reports and Demo videos.</p>

        <HalfHalf>
          <HalfImage image="user_guide.png" />
          <HalfText>
            <h2>User Guide</h2>
            <p>Our User Guide includes information on setting up your device, installing the Android application, using your device and troubleshooting advice.</p>
            <Button href="/user_guide.pdf" target="_blank">
              <FontAwesomeIcon icon={faCloudDownloadAlt} />
              &nbsp;
              Download
            </Button>
          </HalfText>
        </HalfHalf>        

        <HalfHalf style={{ marginTop: 100 }}>
          <HalfText>
            <h2>Demo 4</h2>
            <Button href="/demo_4_report.pdf" target="_blank">
              <FontAwesomeIcon icon={faCloudDownloadAlt} />
              &nbsp;
              Download Report
            </Button>
          </HalfText>
          <HalfImage image="demo_report_4_thumb.png" style={{ backgroundSize: 'auto 100%' }} />
        </HalfHalf>

        <iframe className="video" src="https://www.youtube.com/embed/xj14pMFJlm0?autoplay=true"></iframe>

        <HalfHalf style={{ marginTop: 100 }}>
          <HalfText>
            <h2>Demo 3</h2>
            <Button href="/demo_3_report.pdf" target="_blank">
              <FontAwesomeIcon icon={faCloudDownloadAlt} />
              &nbsp;
              Download Report
            </Button>
          </HalfText>
          <HalfImage image="demo_report_3_thumb.png" style={{ backgroundSize: 'auto 100%' }} />
        </HalfHalf>

        <iframe className="video" src="https://www.youtube.com/embed/7OK2zYLr5NM?autoplay=true"></iframe>

        <HalfHalf style={{ marginTop: 100 }}>
          <HalfText>
            <h2>Demo 2</h2>
            <Button href="/demo_2_report.pdf" target="_blank">
              <FontAwesomeIcon icon={faCloudDownloadAlt} />
              &nbsp;
              Download Report
            </Button>
          </HalfText>
          <HalfImage image="demo_report_2_thumb.png" style={{ backgroundSize: 'auto 100%' }} />
        </HalfHalf>

        <iframe className="video" src="https://www.youtube.com/embed/eSUEcyXjCkI?autoplay=true"></iframe>

        <HalfHalf style={{ marginTop: 100 }}>
          <HalfText>
            <h2>Demo 1</h2>
            <Button href="/demo_1_report.pdf" target="_blank">
              <FontAwesomeIcon icon={faCloudDownloadAlt} />
              &nbsp;
              Download Report
            </Button>
          </HalfText>
          <HalfImage image="demo_report_1_thumb.png" style={{ backgroundSize: 'auto 100%' }} />
        </HalfHalf>

        <iframe className="video" src="https://www.youtube.com/embed/aawJXvcAQLU?autoplay=true"></iframe>

        <HalfHalf style={{ marginTop: 100 }}>
          <HalfText>
            <h2>Project Plan</h2>
            <p>View our User Guide for information on setting up your device, installing the Android application, using your device and troubleshooting advice.</p>
            <Button href="/project_plan_report.pdf" target="_blank">
              <FontAwesomeIcon icon={faCloudDownloadAlt} />
              &nbsp;
              Download
            </Button>
          </HalfText>
          <HalfImage image="project_plan_thumb.png" style={{ backgroundSize: 'auto 100%' }} />
        </HalfHalf>

        <HalfHalf style={{ marginTop: 100 }}>
          <HalfText>
            <h2>Project Pitch</h2>
            <p>View our User Guide for information on setting up your device, installing the Android application, using your device and troubleshooting advice.</p>
            <Button href="/project_pitch.pdf" target="_blank">
              <FontAwesomeIcon icon={faCloudDownloadAlt} />
              &nbsp;
              Download
            </Button>
          </HalfText>
          <HalfImage image="project_pitch_thumb.png" />
        </HalfHalf>

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