import { useForm } from 'react-hook-form';

import Button from 'components/Button';
import Input from 'components/Input';
import FormGroup from 'components/FormGroup';

import * as projectService from 'services/project';

import * as S from './styles';

function CreateProjectForm({ onAdded }) {
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: { name: '' },
  });

  const onSubmit = async (formData) => {
    await projectService.create(formData);
    onAdded();
    reset();
  };

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <S.Title>Create a new project</S.Title>

      <FormGroup>
        <Input name="name" placeholder="Project name" ref={register({ required: true })} error={!!errors.name} />
      </FormGroup>

      <Button type="submit" fullWidth>
        Create Project
      </Button>
    </S.Wrapper>
  );
}

export default CreateProjectForm;
