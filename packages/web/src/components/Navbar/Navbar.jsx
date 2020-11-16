import { useAuth } from 'contexts/auth';

import * as S from './styles';

function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title to="/">TODO List</S.Title>

        <S.ProfileWrapper>
          <S.Profile>{user}</S.Profile>
          <S.ProfileLogout onClick={signOut}>Logout</S.ProfileLogout>
        </S.ProfileWrapper>
      </S.Container>
    </S.Wrapper>
  );
}

export default Navbar;
