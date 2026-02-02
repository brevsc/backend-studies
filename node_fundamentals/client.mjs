const response = await fetch("http://localhost:3000/", {
  method: "GET",
  // headers: {
  //   "Content-Type": "application/json",
  // },
  // body: JSON.stringify({ username: "tester", password: "testing" }),
});

// console.log(response);

const body = await response.text();

console.log(body);
