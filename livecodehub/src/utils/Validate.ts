/* codes :
101 short username
102 long username
103 invalid username
*/
export function validateUsername(username: string) {
  if (username.length < 3) {
    return {
      code: 101,
      message: "Username must be at least 3 characters long.",
    };
  }
  if (username.length > 20) {
    return {
      code: 102,
      message: "Username must be at most 20 characters long.",
    };
  }
  if (!username.match(/^[a-zA-Z0-9_]+$/)) {
    return {
      code: 103,
      message: "Username must contain only letters, numbers, and underscores.",
    };
  }
  return {
    code: 1,
    message: "Valid ",
  };
}
