const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#login-form input[name="username"]').value;
    const password = document.querySelector('#login-form input[name="password"]').value;
  
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to log in');
    }
  };
  
  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);  