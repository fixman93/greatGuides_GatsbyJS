import React, { Component } from 'react';

import Container from '../../../common/container/Container';
import LogoBlack from "../../../images/logoblack.png"
import facebook from '../../../images/fb.svg';
import twitter from '../../../images/twitter.svg';
import instagram from '../../../images/instagram.svg';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <Container>
          <div id="attaMemberLogo" data-orientation="horizontal"><script type="text/javascript" src="//members.adventuretravel.biz/members.js"></script></div>
          <div className='flex justify-content'>
            <div className='col'>
              <img src={LogoBlack} alt='Logo' />
            </div>
            <div className='col social-icons'>
              <ul>
                <li>
                  <a href='https://www.facebook.com/GreatGuidesCom' rel='facebook'>
                    <img src={facebook} alt='facebook' />
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com/greatguidescom' rel='twitter'>
                    <img src={twitter} alt='twitter' />
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/greatguides' rel='instagram'>
                    <img src={instagram} alt='instagram' />
                  </a>
                </li>
              </ul>
            </div>
            <div className='col'>
              <p className='copyright'>
                Copyright © 2018 GreatGuides Corp. All rights reserved. <a href="/privacyPolicy" target="_blank">Privacy policy</a>
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Footer;
