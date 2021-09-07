import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

const StyledCardWrapper = styled.div`
  // Container
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.25em;

  img {
    border-radius: 0.25em;
  }
`;

const StyledCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.125em;

  h3 {
    font-size: 1em;
  }

  span {
    font-size: 0.925em;
  }
`;

const StyledCardBody = styled.div`
  padding: 1em;
  p {
    font-size: 1em;
  }
`;

const StyledCaloriesTag = styled.span`
  color: gray;
  font-weight: 300;
  padding: 0.125em;
  font-family: var(--body-font);
`;

export default function SingleFlavor({ flavor }) {
  return (
    <StyledCardWrapper>
      <GatsbyImage image={flavor.images[0].asset.gatsbyImageData} alt="Image" />
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
        <StyledCaloriesTag>{`${flavor.calories} calories `}</StyledCaloriesTag>
      </StyledCardBody>
    </StyledCardWrapper>
  );
}

SingleFlavor.propTypes = {
  flavor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
