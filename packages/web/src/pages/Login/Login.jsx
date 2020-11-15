import { useForm } from 'react-hook-form';

import { useAuth } from 'contexts/auth';

import * as S from './styles';

const rules = { required: true };

function Login() {
  const { register, handleSubmit, errors, reset } = useForm({
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
      <S.ContentWrapper>
        <S.Title>TODO List</S.Title>

        <form onSubmit={handleSubmit(onSubmit)}>
          <S.FormGroup>
            <S.Input name="email" type="email" ref={register(rules)} placeholder="Email" error={!!errors.email} />
          </S.FormGroup>

          <S.FormGroup>
            <S.Input
              name="password"
              type="password"
              ref={register(rules)}
              placeholder="Senha"
              error={!!errors.password}
            />
          </S.FormGroup>

          <S.Button fullWidth type="submit">
            Login
          </S.Button>
        </form>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}

export default Login;
