import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../state/authUser/action';
import Loading from '../components/Loading';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="login-page">
      <article className="login-page__main">
        <Loading />
        <h1>Login User</h1>
        <LoginInput login={onLogin} />
        <p style={{ marginTop: '10px' }}>
          tidak punya account?
          {' '}
          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
