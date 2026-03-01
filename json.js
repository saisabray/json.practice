
const loadComments = async() => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const res=await fetch(url);
  const data = await res.json();
      displayComments(data);
 document.getElementById("total-comments").innerText = data.length;};

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
