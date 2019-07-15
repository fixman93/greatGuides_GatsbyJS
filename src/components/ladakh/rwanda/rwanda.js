import React from 'react';

import Container from '../../../common/container/Container';
import AdventuresItem from './rwandaItem';
import { useStaticQuery, graphql } from "gatsby"


import './rwanda.css'

const Adventures = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            rwandaItems {
              item {
                status {
                  category
                  date
                }
                title
                location
                userName
                description1
                show {
                  regular_price
                  promotional_price
                }
                rating {
                  stars
                  review
                  adventures
                }
                mainImage
                guideImage
                link
              }
            }
          }
        }
      }
    `
  )
  console.log('site', site.siteMetadata.rwandaItems)
  return (
    <div className='adventures ladakh'>
      <Container>
        <div className='row'>
          {site.siteMetadata && site.siteMetadata.rwandaItems ? site.siteMetadata.rwandaItems.map((items, i) => {
            return (
              <AdventuresItem
                key={i}
                mainImage={items.item.mainImage}
                itemInfo={items}
              />
            )
          }) : null}
        </div>
      </Container>
    </div>
  );

}


export default Adventures;
