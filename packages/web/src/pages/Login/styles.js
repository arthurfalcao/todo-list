import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #195b92;
  font-size: 2.4rem;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  max-width: 400px;
  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  margin-bottom: 1rem;
  width: 100%;
`;

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

export const Button = styled.button`
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
