import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledCardHeader,
  StyledCardBody,
  StyledCardWrapper,
  StyledCaloriesTag,
} from './SingleFlavor.styles';

export default function SingleFlavor({ flavor }) {
  return (
    <StyledCardWrapper>
      <Link to={`/flavors/${flavor.slug.current}`}>
        <GatsbyImage
          image={flavor.images[0].asset.gatsbyImageData}
          alt="Image"
        />
      </Link>
      <StyledCardBody>
        <StyledCardHeader>
          <div>
            <Link to={`/flavors/${flavor.slug.current}`}>
              <h3>{flavor.name}</h3>
            </Link>
          </div>
          <div>
            <span>
              {new Intl.NumberFormat('en-AE', {
                style: 'currency',
                currency: 'AED',
              }).format(flavor.price / 100)}
            </span>
          </div>
        </StyledCardHeader>
        <p>{flavor.description}</p>
      </StyledCardBody>
      <StyledCaloriesTag>{`${flavor.calories} calories `}</StyledCaloriesTag>
    </StyledCardWrapper>
  );
}

SingleFlavor.propTypes = {
  flavor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};
