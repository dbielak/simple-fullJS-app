export const isAuthenticated = () => {
  const token = sessionStorage.getItem('uit');

  if (token) {
    // FIX ME: Add checking token if not logged
  }

  return false;
};
