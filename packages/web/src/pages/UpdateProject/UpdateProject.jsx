import { useParams } from 'react-router-dom';

import Container from 'components/Container';
import Navbar from 'components/Navbar';
import ProjectForm from 'components/ProjectForm';

import * as S from './styles';

function UpdateProject() {
  const { id } = useParams();

  return (
    <>
      <Navbar />

      <Container>
        <S.Wrapper>
          <ProjectForm id={id} />
        </S.Wrapper>
      </Container>
    </>
  );
}

export default UpdateProject;
