import styled from 'styled-components';

const Button = styled.button`
  &:hover {
    background-color: ${({ secondary }) =>
      secondary ? 'var(--yellow)' : 'var(--blue)}'};
  }

  &:disabled {
    background-color: var(--grey);
  }
`;

export { Button };
