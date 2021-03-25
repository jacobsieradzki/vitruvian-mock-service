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

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

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
                <Poster>
                  <Logo className="logo" image={"home-logo.png"} />
                </Poster>
                <Content.Window>
                  <Content.Top>
                    <h1>Let's fix your posture</h1>
                    <p>Our project aims to help improve people’s posture and health while working from home by monitoring sedentary activity and posture, notifying them via an app or by tactile feedback on a worn device.</p>
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
        <HalfHalf className="app">
          <HalfText ref={appRef}>
            <h2>Straight to your phone!</h2>
            <p>This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... </p>
            <p>This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... </p>
            <p>This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... </p>
            <p>This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... </p>
            <p>This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... </p>
            <p>This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... </p>
            <a className="gplay" href='https://play.google.com/store/?pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
          </HalfText>
            <HalfImage className="app-image">
              <lottie-player
                ref={playerRef}
                src={darkMode ? "/assets/home-phone-dark.json" : "/assets/home-phone.json"}
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
              <p>This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... </p>
              <Button href="/system">
                Our System
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
              <p>This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... </p>
              <Button href="/how-it-works">
                How it Works
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
              <p>This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... </p>
              <Button href="/evaluation">
                Read Evaluation
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
              <p>This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... </p>
              <Button href="/budget">
                Read Budget
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
              <p>This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... </p>
              <Button href="/team">
                Our Team
                &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </HalfText>
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