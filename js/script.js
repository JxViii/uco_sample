/* <div class="grid">
    <div class="info">
      <p>This button function is to fetch data from <a href="jsonplaceholder.typicode.com/users">here</a></p>
      <button id="apiButton">Load resources</button>
    </div>

    <div class="content"></div>
</div> */

  async function fetch_data() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("HTTP " + res.status);
    return await res.json();
  }

  const button = document.getElementById("apiButton");
  const content = document.querySelector(".content");
  console.log(button, content);

  button.addEventListener("click", async () => {

      const text = await fetch_data();

      content.innerHTML = "";

      text.forEach(user => {
        content.innerHTML += `<div class="item">${user.name}</div>`;
      });

    }
  )