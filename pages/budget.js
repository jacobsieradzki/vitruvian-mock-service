import React, { useState, useEffect } from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap';
import { Page, Poster } from 'components/Shared'
import { Table } from 'components/Budget'
import Header from 'components/Header'
import Footer from 'components/Footer'
import LinksGrid from 'components/LinksGrid'
import { DiscussionEmbed } from 'disqus-react'

function Home() {

  return (
    <>
      <Header />
      <Poster image="budget.png" color="#264653" />
      <Page>
        <h1>Budget</h1>

        <p>This was the cost of creating our hardware prototype. During actual construction, we can reasonably expect to purchase components in-bulk, and to use cheaper production methods (i.e injection molding instead of 3D printing).</p>

        <p style={{ color: "var(--primary-label-color)"}}><b>We expect to be able to sell Vitruvian at £99.</b></p>

        <p>Our product targets a similar space in the market to products such as standing desks, ergonomic chairs, and other ergonomic products. Ergonomic chairs can cost in the many hundreds of pounds, as can high-end standing desks. Ergonomic products can vary in price depending on the nature of the product but are similarly costly. People are willing to pay a reasonable amount of money for products that improve their physical health, and so we feel that Vitruvian is well-priced.</p>

        <h3>Price Breakdown</h3>
        <p>This is the price breakdown for a single Vitruvian product, including postage and packaging.</p>

        <Table>
          <tr>
            <th>Item</th>
            <th>Cost</th>
          </tr>
          <tr>
            <td>3D Printing (TPU)</td>
            <td>~ £35</td>
          </tr>
          <tr>
            <td>Vest with pouch</td>
            <td>~ £25</td>
          </tr>
          <tr>
            <td>Raspberry Pi Zero W</td>
            <td>£9.30</td>
          </tr>
          <tr>
            <td>2x MPU-9250</td>
            <td>£11.40</td>
          </tr>
          <tr>
            <td>Adafruit TCA9548A I2C Multiplexer</td>
            <td>£5</td>
          </tr>
          <tr>
            <td>Seeed Studio Mini Vibration Motor</td>
            <td>£1.09</td>
          </tr>
          <tr>
            <td>Adafruit 2305 Controller Board</td>
            <td>£7.28</td>
          </tr>
          <tr>
            <td>LiPo Battery</td>
            <td>£17.88</td>
          </tr>
          <tr>
            <td>Charger</td>
            <td>£5.66</td>
          </tr>
          <tr>
            <td>LED Button</td>
            <td>£1.80</td>
          </tr>
          <tr>
            <td>Sound Buzzer</td>
            <td>£1.40</td>
          </tr>
          <tr>
            <td>Grove Base Hat for Raspberry Pi Zero</td>
            <td>£6.40</td>
          </tr>
          <tr>
            <td>Packaging</td>
            <td>~ £1.03</td>
          </tr>
          <tr>
            <td>Next Day Delivery</td>
            <td>~ £5</td>
          </tr>
          <tr>
            <td className="total"><b>TOTAL</b></td>
            <td className="total"><b>~ £135</b></td>
          </tr>
        </Table>

        <LinksGrid exclude="BUDGET" />

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