import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { MdDelete as DeleteIcon, MdEdit as EditIcon } from 'react-icons/md';

import Button from 'components/Button';
import Input from 'components/Input';

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

  const { register, handleSubmit, errors } = useForm({
    defaultValues: { description: '' },
  });

  const onSubmit = async (formData) => {
    const { data } = await taskService.create({ ...formData, projectId: id });
    setToDos((state) => [...state, data]);
  };

  const handleRemoveProject = async () => {
    await projectService.remove(id);
    onRemove(id);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderTitle>{name}</S.HeaderTitle>

        <S.HeaderActions>
          <S.IconButton title="Edit project">
            <EditIcon />
          </S.IconButton>

          <S.IconButton title="Remove project" onClick={handleRemoveProject}>
            <DeleteIcon />
          </S.IconButton>
        </S.HeaderActions>
      </S.Header>

      <S.ContentWrapper>
        <S.Content>
          <S.ContentTitle>To Do</S.ContentTitle>
          {toDos.map((task) => (
            <S.ContentItemWrapper key={task.id}>{task.description}</S.ContentItemWrapper>
          ))}
        </S.Content>

        <S.Content>
          {dones.length > 0 && <S.ContentTitle>Done</S.ContentTitle>}
          {dones.map((task) => (
            <S.ContentItemWrapper key={task.id}>{task.description}</S.ContentItemWrapper>
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
