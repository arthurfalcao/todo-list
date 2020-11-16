import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const Text = styled.span`
  visibility: hidden;
  width: 100px;
  background-color: #195b92;
  color: #fff;
  text-align: center;
  padding: 0.8rem;
  border-radius: 0.8rem;
  position: absolute;
  z-index: 1;

  ${Wrapper}:hover & {
    visibility: visible;
  }
`;
