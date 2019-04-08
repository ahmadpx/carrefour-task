/**
 * validate sign in username
 * @param value
 * @return {string | undefined}
 */
export function validateSignInUsername(value) {
  if (!value) {
    return 'Required field';
  }
}

/**
 * validate sign in password
 * @param value
 * @return {string | undefined}
 */
export function validateSignInPassword(value) {
  if (!value) {
    return 'Required field';
  }
}
