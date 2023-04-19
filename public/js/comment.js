const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const text = document.querySelector('#comment-form textarea[name="text"]').value;
    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
  
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        text,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to post comment');
    }
  };
  
  document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);
  