import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  return (
    <div className="auth-page">
      <section className="auth-card">
        <LoginForm />
      </section>
      <section className="auth-card">
        <RegisterForm />
      </section>
    </div>
  );
};

export default Login;
