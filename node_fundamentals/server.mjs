import { createServer } from "node:http";

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  // console.log(req.url);

  switch (`${req.method} ${req.url}`) {
    case "GET /":
      res.statusCode = 200;
      res.end("HOME");
      break;
    case "POST /products":
      res.statusCode = 201;
      res.end("PRODUCTS");
      break;
    default:
      res.statusCode = 404;
      res.end("NOT FOUND");
  }

  // console.log(req.method);
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
