// "postId": 1,
// "id": 1,
// "name": "id labore ex et quam laborum",
// "email": "Eliseo@gardner.biz",
// "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"

const loadComments = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayComments(data);
      document.getElementById("total-comments").innerText = data.length;
    });
};

const displayComments = (comments) => {
  const commentContainer = document.getElementById("comment-container");
  commentContainer.innerHTML = "";
  comments.forEach((comment) => {
    const div = document.createElement("div");
    div.innerHTML = `
       <h3>${comment.name}</h3>
        <p>${comment.body}</p>
        <span>Email: ${comment.email}</span>
        `;
    commentContainer.appendChild(div);
  });
};
loadComments();
