import React from 'react';
import styled, { css } from 'styled-components';
import { Form, Field } from 'react-final-form';
import createDecorator from 'final-form-focus';
import {
  validateSignInPassword,
  validateSignInUsername
} from '../utils/validation.utils';

const Wrapper = styled.div`
  width: 400px;
  margin: 0 auto 140px;
  padding: 30px 47px;
  text-align: center;
  background-color: white;
  border: 3px solid #f6f6f6;

  @media (max-width: 440px) {
    width: 100%;
    padding: 30px 20px;
  }
`;
const Title = styled.div`
  font-size: 24px;
  line-height: 22px;
  color: #414141;
  font-weight: 600;
  margin-bottom: 10px;
`;
const SubTitle = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #333333;
  font-weight: 400;
  margin-bottom: 60px;
`;
const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  label {
    position: absolute;
    bottom: 100%;
    left: 0;
    font-size: 14px;
    color: #414141;
    font-weight: 600;
    font-style: italic;
    margin-bottom: 5px;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 45px;
  line-height: 45px;
  border-radius: 3px;
  background-color: #ffffff;
  margin-bottom: 30px;
  padding: 0 20px;
  border: 1px solid #f6f6f6;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    border: 1px solid #05549f;
  }

  // focus
  &:focus {
    border: 1px solid #05549f;
    box-shadow: 0 0 3px 3px rgba(173, 215, 255, 0.5);
    outline: none;
  }

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      &,
      &:focus,
      &:hover {
        border: 1px solid #f6303f;
      }
    `};
`;
const ForgetPassword = styled.a`
  font-size: 12px;
  color: #05549f;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
const Error = styled.div`
  font-size: 12px;
  color: #f6303f;
  font-weight: 400;
  padding: 0 17px;
  height: 23px;
  line-height: 23px;
  background-color: #fff0f1;
  position: absolute;
  bottom: 100%;
  right: 0;
`;
const RememberMeRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;
const RememberMe = styled.div`
  cursor: pointer;
  padding-left: 0;
  margin-right: 15px;

  /*
   ======================================
   checkbox
   ======================================
   */
  input[type='checkbox'] {
    opacity: 0;
    width: 0;

    & ~ label:after {
      content: none;
    }

    &:checked ~ label:after {
      content: '';
      color: white;
    }

    &:checked + label:before {
      background: #05549f;
      border: 1px solid #05549f;
    }

    &:focus + label:before {
      border: 1px solid #05549f;
    }
  }

  input[type='checkbox'] ~ label {
    position: relative;
    display: inline-block;
    cursor: pointer;
    user-select: none;
    line-height: 18px;
    font-size: 12px;
    color: #414141;
    font-weight: 400;

    /*18px width of fake checkbox + 10px distance between fake checkbox and text*/
    padding-left: 28px;

    &:before,
    &:after {
      position: absolute;
      content: '';
      display: inline-block;
    }

    &:before {
      height: 20px;
      width: 20px;
      border: 1px solid #ddd;
      border-radius: 3px;
      left: 0;
      top: -2px;
    }

    &:after {
      height: 5px;
      width: 9px;
      border-left: 2px solid;
      border-bottom: 2px solid;
      content: none;
      transform: rotate(-45deg);
      left: 5px;
      top: 4px;
    }
    &:hover {
      color: #414141;
      &:before {
        border: 1px solid #ddd;
      }
    }
  }
`;
const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-radius: 3px;
  background-color: #05549f;
  font-size: 20px;
  color: #ffffff;
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
            <Field
              name="username"
              type="email"
              validate={validateSignInUsername}
            >
              {({ input, meta: { error, touched } }) => (
                <InputWrapper>
                  <Input
                    {...input}
                    placeholder="username"
                    autoComplete="username"
                    isInvalid={touched && error}
                  />
                  {input.value && input.value.length && <label>username</label>}
                  {touched && error && <Error>{error}</Error>}
                </InputWrapper>
              )}
            </Field>

            <Field
              name="password"
              type="password"
              validate={validateSignInPassword}
            >
              {({ input, meta: { error, touched } }) => (
                <InputWrapper>
                  <Input
                    {...input}
                    type="password"
                    placeholder="password"
                    autoComplete="current-password"
                    isInvalid={touched && error}
                  />
                  {input.value && input.value.length && <label>password</label>}
                  {touched && error && <Error>{error}</Error>}
                </InputWrapper>
              )}
            </Field>

            <RememberMeRow>
              <RememberMe>
                <Field
                  id="rememberMe"
                  name="rememberMe"
                  component="input"
                  type="checkbox"
                />
                <label htmlFor="rememberMe">Keep me logged in</label>
              </RememberMe>

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
