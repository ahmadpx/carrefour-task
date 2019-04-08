import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-final-form';
import createDecorator from 'final-form-focus';
import {
  validateSignInPassword,
  validateSignInUsername
} from '../utils/validation.utils';
import CheckBox from './CheckBox';
import Input from './Input';
import { COLORS } from '../constatns';

const Wrapper = styled.div`
  width: 400px;
  margin: 0 auto 140px;
  padding: 30px 47px;
  text-align: center;
  background-color: white;
  border: 3px solid ${COLORS.border};

  @media (max-width: 440px) {
    width: 100%;
    padding: 30px 20px;
  }
`;
const Title = styled.div`
  font-size: 24px;
  line-height: 22px;
  color: ${COLORS.text};
  font-weight: 600;
  margin-bottom: 10px;
`;
const SubTitle = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: ${COLORS.textLight};
  font-weight: 400;
  margin-bottom: 60px;
`;
const ForgetPassword = styled.a`
  font-size: 12px;
  color: ${COLORS.primary};
  font-weight: 400;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
const RememberMeRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;
const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-radius: 3px;
  background-color: ${COLORS.primary};
  font-size: 20px;
  color: white;
  font-weight: 600;
  cursor: pointer;

  &,
  &:active,
  &:focus {
    outline: none;
  }
`;

const focusOnError = createDecorator();

function SignInForm() {
  /**
   * handle sign in
   * @param {{username, password, rememberMe}} values
   */
  const signIn = values => {
    console.log(values);

    fetch('/api/signin', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(values)
    })
      .then(console.log)
      .catch(console.log);
  };

  return (
    <Wrapper>
      <Title>Sign In Now</Title>

      <SubTitle>Unlock awesome features!</SubTitle>

      <Form
        onSubmit={signIn}
        decorators={[focusOnError]}
        initialValues={{
          username: '',
          password: '',
          rememberMe: true
        }}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Input
              name={'username'}
              label={'username'}
              placeholder="username"
              autoComplete="username"
              validate={validateSignInUsername}
            />

            <Input
              name={'password'}
              type={'password'}
              label={'password'}
              placeholder={'password'}
              autoComplete={'current-password'}
              validate={validateSignInPassword}
            />

            <RememberMeRow>
              <CheckBox name="rememberMe" label="Keep me logged in" />
              <ForgetPassword href="#forget">Forget password?</ForgetPassword>
            </RememberMeRow>

            <SubmitButton disabled={submitting} type="submit">
              {submitting ? 'SIGNING IN...' : 'SIGN IN'}
            </SubmitButton>
          </form>
        )}
      />
    </Wrapper>
  );
}

export default SignInForm;
