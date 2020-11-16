import CreateProjectForm from 'components/CreateProjectForm';
import Navbar from 'components/Navbar';

import * as S from './styles';

function Home() {
  return (
    <S.Wrapper>
      <Navbar />

      <S.Container>
        <S.Content>
          <CreateProjectForm />
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
}

export default Home;
