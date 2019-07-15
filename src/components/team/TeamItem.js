import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TeamItem extends Component {
  render() {
    const { allData } = this.props;
    console.log(allData);
    return (
      <div className='news-box'>
        <div className='news-logo'>
          <img className='mini-logo' src={allData.item.image} alt='Logo' />
        </div>
        <div className='news-content'>
          <h3>{allData.item.title}</h3>
          <span>{allData.item.position}</span>
          <p>{allData.item.description}</p>
        </div>
      </div>
    );
  }
}

TeamItem.propTypes = {
  allData: PropTypes.object,
};

export default TeamItem;
