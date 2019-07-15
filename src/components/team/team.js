import React from 'react';

import { useStaticQuery, graphql } from "gatsby"

import Container from '../../common/container/container';
import TeamItem from './TeamItem';

import './team.css';

const TeamComponent = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            teams {
              item {
                name
                position
                description
                image
              }
            }
          }
        }
      }
    `
  )
  console.log('site', site.siteMetadata.teams)
  return (
    <Container>
      <div className='news-title'>
        <h1>Our Great Team</h1>
        <p>Our team brings a wealth of experience from some of the world’s most formidable production studios, agencies and startups.</p>
      </div>
      <div className='news-list'>
        {site.siteMetadata && site.siteMetadata.teams.map((advertise, i) => (
          <TeamItem key={i} allData={advertise} />
        ))}
      </div>
    </Container>
  );
}

export default TeamComponent;
