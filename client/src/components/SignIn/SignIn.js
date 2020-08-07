import React from 'react';
import { Form } from './styled';

const SignIn = () => (
  <Form onSubmit={(e) => e.preventDefault()}>
    <label>Email</label>
    <input />
    <label>Password</label>
    <input />
  </Form>
);

export default SignIn;
