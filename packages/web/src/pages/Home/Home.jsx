import { useState, useEffect, useCallback } from 'react';

import Container from 'components/Container';
import Navbar from 'components/Navbar';
import Project from 'components/Project';
import ProjectForm from 'components/ProjectForm';

import * as projectService from 'services/project';

import * as S from './styles';

function Home() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = useCallback(async () => {
    const { data } = await projectService.getAll();
    setProjects(data);
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleRemoveProject = (id) => {
    setProjects((state) => state.filter((p) => p.id !== id));
  };

  return (
    <>
      <Navbar />

      <Container>
        <S.Content>
          {projects.map((project) => (
            <Project key={project.id} {...project} onRemove={handleRemoveProject} />
          ))}

          <ProjectForm onAdded={fetchProjects} />
        </S.Content>
      </Container>
    </>
  );
}

export default Home;
