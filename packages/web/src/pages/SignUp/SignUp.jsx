import { useForm } from 'react-hook-form';

import { useAuth } from 'contexts/auth';

import * as S from './styles';

const rules = { required: true };

function SignUp() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const { signUp } = useAuth();

  const onSubmit = async (data) => {
    try {
      await signUp(data);
    } catch (err) {
      reset({ ...data, password: '' });
    }
  };

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" ref={register(rules)} placeholder="Name" />
        <input name="email" type="email" ref={register(rules)} placeholder="Email" />
        <input name="password" type="password" ref={register(rules)} placeholder="Password" />

        <button type="submit">Register</button>
      </form>
    </S.Wrapper>
  );
}

export default SignUp;
