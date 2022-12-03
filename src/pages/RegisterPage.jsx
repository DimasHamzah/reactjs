import React from 'react';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncSetRegister } from '../state/register/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncSetRegister({ name, email, password }));

    navigate('/');
  };
  return (
    <section className="login-page">
      <article className="login-page__main">

        <h1>Login User</h1>
        <RegisterInput register={onRegister} />
        <p style={{ marginTop: '10px' }}>
          Sudah punya Akun?
          {' '}
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </p>
      </article>
    </section>
  );
}

export default RegisterPage;
