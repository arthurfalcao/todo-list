import { useParams } from 'react-router-dom';

import Navbar from 'components/Navbar';
import ProjectForm from 'components/ProjectForm';

import * as S from './styles';

function UpdateProject() {
  const { id } = useParams();

  return (
    <>
      <Navbar />

      <S.Container>
        <S.Wrapper>
          <ProjectForm id={id} />
        </S.Wrapper>
      </S.Container>
    </>
  );
}

export default UpdateProject;
