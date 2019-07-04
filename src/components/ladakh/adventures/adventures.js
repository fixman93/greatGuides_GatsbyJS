import React, { Component } from 'react';

import Container from '../../../common/container/Container';
import AdventuresItem from './adventuresItem';

import './adventures.css'

class Adventures extends Component {


  render() {
    return (
      <div className='adventures ladakh'>
        <Container>
          <div className='row'>
            <AdventuresItem />
            <AdventuresItem />
            <AdventuresItem />
          </div>
        </Container>
      </div>
    );
  }
}


export default Adventures;
