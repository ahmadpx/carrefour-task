import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import styled, { css } from 'styled-components';
import { COLORS } from '../constatns';

const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  label {
    position: absolute;
    bottom: 100%;
    left: 0;
    font-size: 14px;
    color: ${COLORS.text};
    font-weight: 600;
    font-style: italic;
    margin-bottom: 5px;
  }
`;
const FormInput = styled.input`
  width: 100%;
  height: 45px;
  line-height: 45px;
  border-radius: 3px;
  background-color: white;
  margin-bottom: 30px;
  padding: 0 20px;
  border: 1px solid ${COLORS.border};
  font-size: 14px;
  font-weight: 600;

  &:hover {
    border: 1px solid ${COLORS.primary};
  }

  &:focus {
    border: 1px solid ${COLORS.primary};
    box-shadow: 0 0 3px 3px rgba(173, 215, 255, 0.5);
    outline: none;
  }

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      &,
      &:focus,
      &:hover {
        border: 1px solid ${COLORS.error};
      }
    `};
`;
const Error = styled.div`
  font-size: 12px;
  color: ${COLORS.error};
  font-weight: 400;
  padding: 0 17px;
  height: 23px;
  line-height: 23px;
  background-color: ${COLORS.errorBackground};
  position: absolute;
  bottom: 100%;
  right: 0;
`;

function Input({ name, type, label, validate, ...props }) {
  return (
    <Field name={name} type={type} validate={validate}>
      {({ input, meta: { error, touched } }) => (
        <InputWrapper>
          <FormInput
            {...input}
            type={type}
            isInvalid={touched && error}
            {...props}
          />
          {input.value && input.value.length && <label>{label}</label>}
          {touched && error && <Error>{error}</Error>}
        </InputWrapper>
      )}
    </Field>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  validate: PropTypes.func
};

Input.defaultProps = {
  type: 'text',
  validate: () => {}
};

export default Input;
