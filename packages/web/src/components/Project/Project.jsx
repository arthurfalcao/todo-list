import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { MdDelete as DeleteIcon, MdEdit as EditIcon } from 'react-icons/md';

import Button from 'components/Button';
import Input from 'components/Input';
import Tooltip from 'components/Tooltip';

import * as projectService from 'services/project';
import * as taskService from 'services/task';

import * as S from './styles';

function Project({ id, name, tasks, onRemove }) {
  const [toDos, setToDos] = useState([]);
  const [dones, setDones] = useState([]);

  useEffect(() => {
    setToDos(tasks.filter((t) => !t.finishedAt));
    setDones(tasks.filter((t) => !!t.finishedAt));
  }, [tasks]);

  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: { description: '' },
  });

  const onSubmit = async (formData) => {
    const { data } = await taskService.create({ ...formData, projectId: id });
    setToDos((state) => [...state, data]);
    reset();
  };

  const handleRemoveProject = async () => {
    await projectService.remove(id);
    onRemove(id);
  };

  const handleFinishTask = (id) => async () => {
    const { data: task } = await taskService.finish(id);
    setToDos((state) => state.filter((t) => t.id !== id));
    setDones((state) => [...state, task]);
  };

  const handleUninishTask = (id) => async () => {
    const { data: task } = await taskService.unfinish(id);
    setDones((state) => state.filter((t) => t.id !== id));
    setToDos((state) => [...state, task]);
  };

  const handleRemoveTask = (id) => async () => {
    await taskService.remove(id);
    setToDos((state) => state.filter((t) => t.id !== id));
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderTitle>{name}</S.HeaderTitle>

        <S.HeaderActions>
          <S.IconButton color="white" title="Edit project" as={Link} to={`/projects/${id}/edit`}>
            <EditIcon />
          </S.IconButton>

          <S.IconButton color="white" title="Remove project" onClick={handleRemoveProject}>
            <DeleteIcon />
          </S.IconButton>
        </S.HeaderActions>
      </S.Header>

      <S.ContentWrapper>
        <S.Content>
          <S.ContentTitle>To Do</S.ContentTitle>
          {toDos.map((task) => (
            <S.ContentItemWrapper key={task.id}>
              <S.Checkbox onChange={handleFinishTask(task.id)} />
              <S.Label>{task.description}</S.Label>

              <S.ButtonWrapper>
                <S.IconButton size="small" title="Remove task" onClick={handleRemoveTask(task.id)}>
                  <DeleteIcon />
                </S.IconButton>
              </S.ButtonWrapper>
            </S.ContentItemWrapper>
          ))}
        </S.Content>

        <S.Content>
          {dones.length > 0 && <S.ContentTitle>Done</S.ContentTitle>}
          {dones.map((task) => (
            <S.ContentItemWrapper key={task.id}>
              <S.Checkbox checked onChange={handleUninishTask(task.id)} />
              <S.Label>
                <Tooltip title={new Date(task.finishedAt).toLocaleString()}>{task.description}</Tooltip>
              </S.Label>
            </S.ContentItemWrapper>
          ))}
        </S.Content>
      </S.ContentWrapper>

      <S.Divider />

      <S.Footer onSubmit={handleSubmit(onSubmit)}>
        <Input name="description" placeholder="Task" ref={register({ required: true })} error={!!errors.description} />
        <Button type="submit">Add</Button>
      </S.Footer>
    </S.Wrapper>
  );
}

export default Project;
