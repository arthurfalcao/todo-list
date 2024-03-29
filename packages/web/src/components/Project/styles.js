import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0px 2px 10px rgba(210, 210, 210, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const Header = styled.div`
  align-items: center;
  background: #195b92;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1.6rem;
`;

export const HeaderTitle = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const HeaderActions = styled.div`
  display: flex;

  & > :not(:last-child) {
    margin-right: 0.8rem;
  }
`;

const buttonModifiers = {
  white: css`
    color: #fff;
  `,
  default: css`
    color: #195b92;
  `,
  small: css`
    svg {
      height: 1.4rem;
      width: 1.4rem;
    }
  `,
  medium: css`
    svg {
      height: 1.8rem;
      width: 1.8rem;
    }
  `,
};

export const IconButton = styled.button`
  ${({ color, size }) => css`
    border: 0;
    background: transparent;
    cursor: pointer;
    display: flex;

    &:hover {
      opacity: 0.8;
    }

    ${buttonModifiers[color || 'default']}
    ${buttonModifiers[size || 'medium']}
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.6rem;
`;

export const Content = styled.div`
  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

export const ContentTitle = styled.p`
  color: #373737;
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
`;

export const ButtonWrapper = styled.div`
  display: none;
`;

export const ContentItemWrapper = styled.div`
  align-items: center;
  display: flex;

  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }

  & > :not(:last-child) {
    margin-right: 0.8rem;
  }

  &:hover ${ButtonWrapper} {
    display: block;
  }
`;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})``;

export const Label = styled.label`
  color: #373737;
  font-size: 1.2rem;
  font-weight: bold;

  > a {
    color: #195b92;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Divider = styled.hr`
  height: 0;
  margin: 0.4rem 1.6rem;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
`;

export const Footer = styled.form`
  display: flex;
  padding: 1.6rem;

  & > :not(:last-child) {
    margin-right: 1.6rem;
  }
`;
