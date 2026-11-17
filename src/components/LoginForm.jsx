import useForm from '../hooks/formHooks';
import {useAuthentification} from '../hooks/apiHooks';

const LoginForm = () => {
  const postLogin = useAuthentification();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async (formData) => {
    console.log('Hooking palauttama formdata', formData);
    try {
      const userInfo = await postLogin(formData);
      console.log(userInfo);
    } catch (error) {
      console.log('Could not log in, ', error);
    }
  };

  const {handleInputChange, handleSubmit} = useForm(doLogin, initValues);

  return (
    <section className="login-card" aria-labelledby="login-title">
      <h1 id="login-title">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form__field">
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div className="login-form__field">
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button className="login-form__submit" type="submit">
          Login
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
