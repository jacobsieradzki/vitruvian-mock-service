import React, { useState, useEffect } from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap';
import { Page, Button, Footer } from 'components/Shared'
import Header, { Logo } from 'components/Header'
import { PosterWindow, Poster, Content, HalfHalf, HalfImage, HalfText } from 'components/Home'
import useScrollPosition from '@h/use-scroll-position'
import useWindowSize from '@h/use-window-size'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Home() {

  const scroll = useScrollPosition();
  const { width, height } = useWindowSize();
  // console.log(scroll, width, height);

  const headerFilled = scroll >= height - 300; 

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
                    <p>
                      <FontAwesomeIcon icon={faArrowDown} />
                      &nbsp;
                      Read more
                    </p>
                    <a href='https://play.google.com/store/?pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
                  </Content.Bottom>
                </Content.Window>
              </PosterWindow>
            </Tween>
          )}}
        </Scene>
      </Controller>

      <Page id="home">
        <HalfHalf>
          <HalfImage image="system.png" />
          <HalfText>
            <h2>System</h2>
            <p>This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... </p>
            <Button>
              Our System
              &nbsp;
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </HalfText>
        </HalfHalf>
        <HalfHalf>
          <HalfText>
            <h2>How it Works</h2>
            <p>This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... </p>
            <Button>
              How it Works
              &nbsp;
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </HalfText>
          <HalfImage image="how-it-works.png" />
        </HalfHalf>
        <HalfHalf>
          <HalfImage image="evaluation.png" />
          <HalfText>
            <h2>Evaluation</h2>
            <p>This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... </p>
            <Button>
              Read Evaluation
              &nbsp;
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </HalfText>
        </HalfHalf>
        <HalfHalf>
          <HalfText>
            <h2>Budget</h2>
            <p>This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... </p>
            <Button>
              Read Budget
              &nbsp;
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </HalfText>
          <HalfImage image="budget.png" />
        </HalfHalf>
        <HalfHalf>
          <HalfImage image="team.png" />
          <HalfText>
            <h2>Team</h2>
            <p>This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... This is some text .... </p>
            <Button>
              Our Team
              &nbsp;
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </HalfText>
        </HalfHalf>
      </Page>
      <Footer.Wrapper>
        <Footer.Column>
          <Logo className="logo" image="home-logo.png" />
          <div><a href="/">System</a></div>
          <div><a href="/">How it Works</a></div>
          <div><a href="/">Evaluation</a></div>
          <div><a href="/">Budget</a></div>
          <div><a href="/">Team</a></div>
        </Footer.Column>

        <Footer.Column>
          <h3>
            <FontAwesomeIcon icon={faGithub} />
            &nbsp;
            Repositories
          </h3>
          <div><a href="/">Android App</a></div>
          <div><a href="/">Hardware</a></div>
          <div><a href="/">Android App</a></div>
        </Footer.Column>

        <Footer.Column>
          <h3>Acknowledgements</h3>
          <div><a href="https://icons8.com">Icons8</a></div>
          <div><a href="https://fontawesome.com">Font Awesome</a></div>
        </Footer.Column>

        <Footer.Column>
          <h3>More</h3>
          <div><a href="/">System</a></div>
          <div><a href="/">How it Works</a></div>
          <div><a href="/">Evaluation</a></div>
          <div><a href="/">Budget</a></div>
          <div><a href="/">Team</a></div>
        </Footer.Column>
      </Footer.Wrapper>
    </>
  );
};

export default Home;