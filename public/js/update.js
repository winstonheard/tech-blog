const updatePostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#update-form input[name="title"]').value;
    const content = document.querySelector('#update-form textarea[name="content"]').value;
    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
  
    const response = await fetch(`/api/posts/${post_id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update post');
    }
  };
  
  document.querySelector('#update-form').addEventListener('submit', updatePostHandler);  