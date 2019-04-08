import {
  validateSignInPassword,
  validateSignInUsername
} from './validation.utils';

describe('validateSignInUsername', () => {
  it('should return `Required field` as error if the value is undefined', function() {
    expect(validateSignInUsername()).toBe('Required field');
  });

  it('should return `undefined` if there is value provided', function() {
    expect(validateSignInUsername('ahmed')).toBe(undefined);
  });
});

describe('validateSignInPassword', () => {
  it('should return `Required field` as error if the value is undefined', function() {
    expect(validateSignInPassword()).toBe('Required field');
  });

  it('should return `undefined` if there is value provided', function() {
    expect(validateSignInPassword('password')).toBe(undefined);
  });
});
