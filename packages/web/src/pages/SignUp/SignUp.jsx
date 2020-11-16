import { useForm } from 'react-hook-form';

import AuthLayout from 'components/AuthLayout';
import Button from 'components/Button';
import FormGroup from 'components/FormGroup';
import Input from 'components/Input';

import { useAuth } from 'contexts/auth';

const rules = { required: true };

function SignUp() {
  const { register, handleSubmit, reset, errors } = useForm({
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
    <AuthLayout action={{ link: '/login', title: 'Login' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Input name="name" ref={register(rules)} placeholder="Name" error={!!errors.name} />
        </FormGroup>

        <FormGroup>
          <Input name="email" type="email" ref={register(rules)} placeholder="Email" error={!!errors.email} />
        </FormGroup>

        <FormGroup>
          <Input
            name="password"
            type="password"
            ref={register(rules)}
            placeholder="Password"
            error={!!errors.password}
          />
        </FormGroup>

        <Button fullWidth type="submit">
          Register
        </Button>
      </form>
    </AuthLayout>
  );
}

export default SignUp;
