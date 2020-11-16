import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';

import Button from 'components/Button';
import Container from 'components/Container';
import FormGroup from 'components/FormGroup';
import Input from 'components/Input';
import Navbar from 'components/Navbar';

import * as taskService from 'services/task';

import * as S from './styles';

function UpdateTask() {
  const [task, setTask] = useState({});
  const { id } = useParams();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await taskService.get(id);
      setTask(data);
    };

    fetchTask();
  }, [id]);

  const onSubmit = async (data) => {
    await taskService.update(id, data);
    history.push('/');
  };

  return (
    <>
      <Navbar />

      <Container>
        <S.Wrapper>
          <S.Title>Project - {task.project?.name}</S.Title>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Input
                name="description"
                placeholder="Task"
                ref={register({ required: true })}
                error={!!errors.description}
                defaultValue={task.description}
              />
            </FormGroup>
            <Button fullWidth type="submit">
              Save
            </Button>
          </form>
        </S.Wrapper>
      </Container>
    </>
  );
}

export default UpdateTask;
