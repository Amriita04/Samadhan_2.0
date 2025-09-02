let posts = [];

function createPost() {
  const content = document.getElementById('postContent').value;
  if (content.trim() === '') return;

  const newPost = {
    id: Date.now(),
    author: "John Doe",
    content,
    likes: 0,
    liked: false,
    comments: []
  };

  posts.unshift(newPost);
  document.getElementById('postContent').value = '';
  renderPosts();
}

function toggleLike(id) {
  const post = posts.find(p => p.id === id);
  if (!post) return;

  post.liked = !post.liked;
  post.likes += post.liked ? 1 : -1;
  renderPosts();
}

function addComment(id, commentInputId) {
  const post = posts.find(p => p.id === id);
  const input = document.getElementById(commentInputId);
  const comment = input.value.trim();
  if (comment === '') return;

  post.comments.push(comment);
  input.value = '';
  renderPosts();
}

function renderPosts() {
  const feed = document.getElementById('feed');
  feed.innerHTML = '';

  posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    postDiv.innerHTML = `
      <div class="author">${post.author}</div>
      <div class="content">${post.content}</div>
      <div class="actions">
        <span onclick="toggleLike(${post.id})">${post.liked ? '❤️' : '🤍'} ${post.likes}</span>
        <span>${post.comments.length} 💬</span>
      </div>
      <div class="comments">
        ${post.comments.map(c => `<div>🗨️ ${c}</div>`).join('')}
        <input type="text" id="comment-${post.id}" placeholder="Add a comment..." />
        <button onclick="addComment(${post.id}, 'comment-${post.id}')">Comment</button>
      </div>
    `;

    feed.appendChild(postDiv);
  });
}
