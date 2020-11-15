import { useForm } from 'react-hook-form';

import { useAuth } from 'contexts/auth';

import * as S from './styles';

const rules = { required: true };

function Login() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { signIn } = useAuth();

  const onSubmit = async (data) => {
    try {
      await signIn(data);
    } catch (err) {
      reset();
    }
  };

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="email" type="email" ref={register(rules)} placeholder="Email" />
        <input name="password" type="password" ref={register(rules)} placeholder="Senha" />

        <button type="submit">Login</button>
      </form>
    </S.Wrapper>
  );
}

export default Login;
