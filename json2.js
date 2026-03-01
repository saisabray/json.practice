const loadUsers = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(url);
  const data = await res.json();
  displayData(data);
};

const displayData = (data) => {
  const userContainer = document.getElementById("user-container");
  data.forEach((details) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <h2>${details.name}</h2>
        <p>Contact:${details.email},${details.phone}</p>
        <p>Address:${details.address.street},${details.address.suite},${details.address.city}
</p>
        <p>Company:${details.company.name},${details.company.catchPhrase}</p>
        `;
    userContainer.appendChild(div);
  });
};
loadUsers();
