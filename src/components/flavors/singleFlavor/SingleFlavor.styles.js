import styled from 'styled-components';

const StyledCardWrapper = styled.div`
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.25em;

  height: available;

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
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;

  padding: 1em;
  p {
    font-size: 1em;
  }
`;

const StyledCaloriesTag = styled.span`
  display: block;
  color: gray;
  font-weight: 300;
  padding: 0 0 1em 1em;
  font-family: var(--body-font);
`;

export {
  StyledCardWrapper,
  StyledCardBody,
  StyledCardHeader,
  StyledCaloriesTag,
};
