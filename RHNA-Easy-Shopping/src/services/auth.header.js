export default function authHeader() {

  // TODO: Get current user and assign to variable
  const user = JSON.parse(localStorage.getItem('user'));

  // TODO: Check token and user is validate or not
  if (user && user.accessToken) {
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
}
