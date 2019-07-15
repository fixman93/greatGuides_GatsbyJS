import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'

import './norway.css'
class AdventuresItem extends Component {

  componentDidMount() {
    this.setState({
      description: this.props.itemInfo.item.description1
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ description: nextProps.description1 });
  }

  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      email: '',
      name: '',
      description: '',
      messError: false,
      showmessage: ''
    }
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  showModal = () => {
    this.setState({
      showModal: true
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }
  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  _handleSubmit(event) {
    event.preventDefault();
    if (this.state.name !== '' && this.state.email !== '' && this.state.description !== '') {
      addToMailchimp(this.state.email, { FNAME: this.state.name, DESCRIPT: this.props.itemInfo.item.title }) // listFields are optional if you are only capturing the email address.
        .then(data => {
          // I recommend setting data to React state
          // but you can do whatever you want (including ignoring this `then()` altogether)
          console.log('data', data)
          this.setState({
            showmessage: data.msg
          })
          return true
        })
        .catch((err) => {
          console.log('cache', err)
          // unnecessary because Mailchimp only ever
          // returns a 200 status code
          // see below for how to handle errors
        })
    }
    else {
      this.setState({
        messError: true
      })
    }

  }
  render() {
    console.log('aaaaaaaa', this.state.showmessage)
    const { showModal } = this.state
    return (
      <article className='adventures-item'>
        {showModal ?
          <div className='emailModal'>
            <div className="emailContainer">
              <div className='closeModal' onClick={this.closeModal}>x</div>
              <h2>Contact Detail. </h2>
              <div className="noticePara"><p>We need some contact information to confirm your request.</p></div>
              <form >
                <div className='form-group'>
                  <input type='text' onChange={(e) => this.handleChange(e)} name='name' placeholder='Name' />
                </div>
                <div className='form-group'>
                  <input onChange={(e) => this.handleChange(e)} name='email' type='email' placeholder='Email' />
                </div>
                <div className='form-group'>
                  <textarea
                    onChange={(e) => this.handleChange(e)}
                    name='description'
                    placeholder='Description'
                    value={this.state.description}></textarea>

                </div>
                {this.state.messError === true ? <div className='error'>Please check you informations</div> : null}
                <div className="messInfo">{this.state.showmessage}</div>
                <button onClick={this._handleSubmit}>Submit</button>
              </form>
            </div>

          </div> : null
        }
        <div className='card'>
          <div className='imageInfo'>
            <img src={this.props.mainImage} alt='img1' className='main-img' />
            <div className='review'>
              <div className='user'>
                <img src={this.props.itemInfo.item.guideImage} alt='User' />
              </div>
              <div className='rating'>
                <b>{this.props.itemInfo.item.userName}</b>
                {/* <ul>
                  <li>
                    <i className='fa fa-star' aria-hidden='true' /> {this.props.itemInfo.item.rating.stars}
                  </li>
                  <li>
                    <i className='fa fa-circle' aria-hidden='true' /> {this.props.itemInfo.item.rating.review} review
                  </li>
                  <li>
                    <i className='fa fa-circle' aria-hidden='true' /> {this.props.itemInfo.item.rating.adventures} adventures
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='status'>
              <span>{this.props.itemInfo.item.status.category}: </span>
              <span>{this.props.itemInfo.item.status.date}</span>
            </div>
            <h2>{this.props.itemInfo.item.title}</h2>
            <div className='place'>
              {/* <img src={location} alt='location' /> */}
              {this.props.itemInfo.item.location}
            </div>

            <div className='description'>
              <p>
                {this.props.itemInfo.item.description1}
                <a href={this.props.itemInfo.item.link} target="_blank" rel="noopener">Read More</a>
              </p>
            </div>
            <div className='shop'>
              <div className='regular-price'>
                <span>{this.props.itemInfo.item.show.regular_price}</span>
              </div>
              <div className='book-now p-0'>
                <button
                  className='btn orange-btn'
                  onClick={() => this.showModal()}
                >
                  Request information
                </button>
              </div>

            </div>
          </div>
        </div>
      </article>
    );
  }
}



export default AdventuresItem;
