const response = await fetch("http://localhost:3000/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username: "tester", password: "testing" }),
});

console.log(response);

const body = await response.json();

console.log(body.name);
