import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import styled from 'styled-components';
import { COLORS } from '../constatns';

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
      background: ${COLORS.primary};
      border: 1px solid ${COLORS.primary};
    }

    &:focus + label:before {
      border: 1px solid ${COLORS.primary};
    }
  }

  input[type='checkbox'] ~ label {
    position: relative;
    display: inline-block;
    cursor: pointer;
    user-select: none;
    line-height: 18px;
    font-size: 12px;
    color: ${COLORS.text};
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
      color: ${COLORS.text};
      &:before {
        border: 1px solid #ddd;
      }
    }
  }
`;

function CheckBox({ name, label }) {
  return (
    <RememberMe>
      <Field id={name} name={name} component="input" type="checkbox" />
      <label htmlFor={name}>{label}</label>
    </RememberMe>
  );
}

CheckBox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string
};

export default CheckBox;
