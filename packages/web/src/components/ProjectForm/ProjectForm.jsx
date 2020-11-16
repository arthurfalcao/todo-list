import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import Button from 'components/Button';
import Input from 'components/Input';
import FormGroup from 'components/FormGroup';

import * as projectService from 'services/project';

import * as S from './styles';

function ProjectForm({ id, onAdded }) {
  const [project, setProject] = useState({
    name: '',
  });

  const { register, handleSubmit, errors, reset } = useForm();
  const history = useHistory();

  useEffect(() => {
    const fetchProject = async () => {
      const { data } = await projectService.get(id);
      setProject({ name: data.name });
    };

    if (id) fetchProject();
  }, [id]);

  const onSubmit = async (formData) => {
    if (!id) {
      await projectService.create(formData);
      onAdded();
      reset();
    } else {
      await projectService.update(id, formData);
      history.push('/');
    }
  };

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <S.Title>{id ? 'Update the project' : 'Create a new project'}</S.Title>

      <FormGroup>
        <Input
          name="name"
          placeholder="Project name"
          ref={register({ required: true })}
          error={!!errors.name}
          defaultValue={project.name}
        />
      </FormGroup>

      <Button type="submit" fullWidth>
        {id ? 'Update' : 'Create Project'}
      </Button>
    </S.Wrapper>
  );
}

export default ProjectForm;
