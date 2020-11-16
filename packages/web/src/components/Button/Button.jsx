import styled, { css } from 'styled-components';

const Button = styled.button`
  ${({ fullWidth }) => css`
    background: #ffc12c;
    border: 0;
    border-radius: 0.5rem;
    color: #ffffff;
    cursor: pointer;
    font-size: 1.8rem;
    font-weight: bold;
    padding: 1.6rem 3.2rem;

    ${fullWidth &&
    css`
      width: 100%;
    `}
  `}
`;

export default Button;
