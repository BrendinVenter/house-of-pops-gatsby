import React from 'react';
import styled from 'styled-components';
import SingleFlavor from '../singleFlavor/SingleFlavor';

const StyledFlavorsList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 0.75em;
  padding: 1em 0;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

// markup
const FlavorList = ({ flavors }) => (
  <StyledFlavorsList>
    {flavors.map((flavor) => (
      <SingleFlavor key={flavor.id} flavor={flavor} />
    ))}
  </StyledFlavorsList>
);

export default FlavorList;
