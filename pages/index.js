import React, { useState, useEffect, useRef } from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import Fade from 'react-reveal';
import { Tween } from 'react-gsap';
import { Page, Button } from 'components/Shared'
import Footer from 'components/Footer'
import Header, { Logo } from 'components/Header'
import { PosterWindow, Poster, Content, HalfHalf, HalfImage, HalfText } from 'components/Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import useScrollPosition from '@h/use-scroll-position';
import Jump from 'react-reveal/Jump';
import { DiscussionEmbed } from 'disqus-react'

function Home() {
  const appRef = useRef(null);
  const playerRef = useRef(null);
  const scroll = useScrollPosition();

  const y = scroll - appRef?.current?.offsetTop ?? 0
  const h = appRef?.current?.offsetHeight || 1;
  const progress = Math.max(0, Math.min(y / (h - 500), 1));
  const progressStr = `${Math.round(progress * 100)}%`;
  playerRef?.current?.seek(progressStr);

  const animSize = appRef?.current?.offsetWidth || 250;

  return (
    <>
      <Controller>
        <Scene offset={100} duration={300} triggerElement="#home" triggerHook="onEnter">
          {function(progress) { return (
            <Tween
              from={{ opacity: '0' }}
              to={{ opacity: '1' }}
              ease="Strong.easeIn"
              totalProgress={progress}
              paused
            >
              {Header()}
            </Tween>
          )}}
        </Scene>
      </Controller>
      <Controller>
        <Scene offset={100} duration={500} triggerElement="#home" triggerHook="onEnter">
          {function(progress) { return (
            <Tween
              from={{ opacity: '1' }}
              to={{ opacity: '0' }}
              ease="Strong.easeOut"
              totalProgress={progress}
              paused
            >
              <PosterWindow id="poster" className="tween">
                <Poster image="home_poster.png">
                  <Logo className="logo" image={"home-logo.png"} />
                </Poster>
                <Content.Window>
                  <Content.Top>
                    <h1>Bad posture?<br/>Let's fix it.</h1>
                    <Fade>
                      <p>Our project aims to help improve people’s posture and health while working from home.</p>
                      <p>Introducing Vitruvian, a compact and lightweight device that attaches unobtrusively to your body with a light and comfortable vest.</p>
                    </Fade>
                  </Content.Top>
                  <Content.Spacer />
                  <Content.Bottom>
                    <Jump>
                      <p>
                        <FontAwesomeIcon icon={faArrowDown} />
                        &nbsp;
                        Read more
                      </p>
                    </Jump>
                    <a href='https://play.google.com/store/?pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
                  </Content.Bottom>
                </Content.Window>
              </PosterWindow>
            </Tween>
          )}}
        </Scene>
      </Controller>

      <Page id="home">

        <Fade>
          <p>Vitruvian detects if you are slouching or sitting for a long period of time and provides real-time feedback as a vibration and a sound, which can be configured in the accompanying Android app. The system intelligently detects between the user quickly bending over and the user slouching for an extended period. Using machine learning, the system can even detect if you are sitting, standing, walking and more!</p>
          <iframe className="video" src="https://www.youtube.com/embed/mGL_-anc8L8"></iframe>
        </Fade>        

        <HalfHalf className="app">
          <HalfText ref={appRef}>
            <h2>Straight to your phone!</h2>
            <p>Vitruvian pairs with your Android phone via Bluetooth and syncs all of your activity data throughout the day.</p>
            <p>View real-time posture scores as well as historical insights to track your progress. The app intelligently keeps all data for the current month and shows you averages for previous months since you started, to save vital space on your phone.</p>
            <p>We realise that sometimes you don’t want your device to be playing a sound at work, or the vibrations may get annoying all day – which is why we included a feature to configure alerts from the app. </p>
            <p>We want everyone to feel included through design, so we included a feature that allows you to change your character that appears on the main screen to suit you.</p>
            <p>The app supports <b>dark mode</b> to help avoid visual fatigue. All colours are <a href="https://www.w3.org/TR/WCAG21/" target="_blank">WCAG</a> AAA compliant and all designs were built from scratch following <a href="https://material.io/" target="_blank">Material Design</a> best practices.</p>
            <p>We also wanted the app to be colour deficiency and colour-blindness friendly – meaning all screens have been tested against 4 different types of color blindness, especially data visualisation.</p>
            <a className="gplay" href='https://play.google.com/store'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
          </HalfText>
            <HalfImage className="app-image">
              <lottie-player
                ref={playerRef}
                src="/assets/home-phone.json"
                background="transparent" 
                renderer="canvas" 
                progress={progress}
                style={{ width: animSize, height: animSize }} 
              />
            </HalfImage>
        </HalfHalf>
        <Fade left>
          <HalfHalf>
            <HalfImage image="system.png" />
            <HalfText>
              <h2>System</h2>
              <p>Our system is powered by a <b>Raspberry Pi Zero</b> and two <b>MPU-9250</b>s, which connects to the accompanying Android app via Bluetooth.</p>
              <p>The low-power components give the system enough battery life to make it all the way through the work day!</p>
              <Button href="/system">
                Read more
                &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </HalfText>
          </HalfHalf>
        </Fade>
        <Fade right>
          <HalfHalf>
            <HalfText>
              <h2>How it Works</h2>
              <p>Using two sensors on the back, Vitruvian calculates the angle and curvature of your back, and ignores any general movements.</p>
              <p>Vitruvian will send you an alert if you've been slouching or sitting down for too long.</p>
              <Button href="/how-it-works">
                Read more
                &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </HalfText>
            <HalfImage image="how-it-works.png" />
          </HalfHalf>
        </Fade>
        <Fade left>
          <HalfHalf>
            <HalfImage image="evaluation.png" />
            <HalfText>
              <h2>Evaluation</h2>
              <p>Our evaluation included creating tests for our slouch detection and sedentary detection algorithms to verify their accuracy.</p>
              <p>We created tests using Webots, asking the technicians to perform tasks and using our own iOS accelerometer tool.</p>
              <p></p>
              <Button href="/evaluation">
                Read more
                &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </HalfText>
          </HalfHalf>
        </Fade>
        <Fade right>
          <HalfHalf>
            <HalfText>
              <h2>Budget</h2>
              <p>Our budget outlines our use of technician time throughout the project and a cost to build a Vitruvian device.</p>
              <Button href="/budget">
                Read more
                &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </HalfText>
            <HalfImage image="budget.png" />
          </HalfHalf>
        </Fade>
        <Fade left>
          <HalfHalf>
            <HalfImage image="team.png" />
            <HalfText>
              <h2>Team</h2>
              <p>This section outlines the responsibilities of each team member and how tasks were planned and organised.</p>
              <Button href="/team">
                Read more
                &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </HalfText>
          </HalfHalf>
        </Fade>
        <Fade up>
          <HalfHalf>
            <HalfText>
              <h2>Submissions</h2>
              <p>A collection of all of <b>Team Vee's</b> submissions throughout SDP. Includes our User Guide, Demo reports and Demo videos.</p>
              <Button href="/submissions">
                View all
                &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </HalfText>
            <HalfImage image="user_guide.png" />
          </HalfHalf>
        </Fade>

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