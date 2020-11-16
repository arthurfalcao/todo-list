import { useForm } from 'react-hook-form';

import AuthLayout from 'components/AuthLayout';
import Button from 'components/Button';
import FormGroup from 'components/FormGroup';
import Input from 'components/Input';

import { useAuth } from 'contexts/auth';

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
    <AuthLayout action={{ link: '/sign-up', title: 'Register' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Input name="email" type="email" ref={register(rules)} placeholder="Email" error={!!errors.email} />
        </FormGroup>

        <FormGroup>
          <Input name="password" type="password" ref={register(rules)} placeholder="Senha" error={!!errors.password} />
        </FormGroup>

        <Button fullWidth type="submit">
          Login
        </Button>
      </form>
    </AuthLayout>
  );
}

export default Login;
