const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#signup-form input[name="username"]').value;
    const password = document.querySelector('#signup-form input[name="password"]').value;
  
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up');
    }
  };
  
  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);  