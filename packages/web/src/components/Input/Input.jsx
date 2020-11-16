import styled, { css } from 'styled-components';

const inputModifiers = {
  onError: () => css`
    border-color: #e74c3c;

    &:focus {
      box-shadow: 0 0 0 1.5px #e74c3c;
    }
  `,
};

export const Input = styled.input`
  ${({ error }) => css`
    border: 3px solid #ffc12c;
    border-radius: 0.5rem;
    font-size: 1.8rem;
    padding: 1.6rem 3.2rem;
    width: 100%;

    ${!!error && inputModifiers.onError()}
  `}
`;

export default Input;
