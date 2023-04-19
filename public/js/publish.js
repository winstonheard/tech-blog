const publishPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#publish-form input[name="title"]').value;
    const content = document.querySelector('#publish-form textarea[name="content"]').value;
  
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to publish post');
    }
  };
  
  document.querySelector('#publish-form').addEventListener('submit', publishPostHandler);  