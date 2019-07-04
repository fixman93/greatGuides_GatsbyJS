import React, { Component } from 'react';

import bgPattern from '../../../images/bgpattern.png';
import './questions.css';

class Questions extends Component {
  render() {
    let bgImage = {
      backgroundImage: 'url(' + bgPattern + ')',
    };

    return (
      <div className='questions' style={bgImage}>
        <h2 className='subTitle'>Have any questions?</h2>
        <p className='smallDescription'>Contact us through this form:</p>
        {this.props.sendMessageError && (
          <p className="error_text">Name, Email and Message are required fields</p>
        )}
        <form>
          {/* <label htmlFor="email">email</label> */}
          <div className='form-group'>
            <input
              id="email"
              type='email'
              placeholder='Your Email'
            />
          </div>

          {/* <label htmlFor="name">name</label> */}
          <div className='form-group'>
            <input
              id="name"
              type='email'
              placeholder='Your Name'
            />
          </div>

          {/* <label htmlFor="message">message</label> */}
          <div className='form-group'>
            <textarea
              id="message"
              type='email'
              placeholder='Your message'></textarea>
          </div>
          <button className="btn full-orange-btn">Send a message</button>
        </form>
      </div>
    );
  }
}

export default Questions;
