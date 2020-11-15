import { useForm } from 'react-hook-form';

import { useAuth } from 'contexts/auth';

import * as S from './styles';

function Login() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { signIn } = useAuth();

  const onSubmit = async (data) => {
    await signIn(data);
  };

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="email" type="email" ref={register({ required: true })} placeholder="Email" />
        <input name="password" type="password" ref={register({ required: true })} placeholder="Senha" />

        <button type="submit">Login</button>
      </form>
    </S.Wrapper>
  );
}

export default Login;
