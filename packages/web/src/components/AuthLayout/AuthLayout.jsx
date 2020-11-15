import * as S from './styles';

function AuthLayout({ children, title = 'TODO List' }) {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Title>{title}</S.Title>

        {children}
      </S.ContentWrapper>
    </S.Wrapper>
  );
}

export default AuthLayout;
