import { createServer } from "node:http";

// const part1 = Buffer.from("hello ");
// const part2 = Buffer.from("world");
// const parts = Buffer.concat([part1, part2]).toString("utf-8");
// console.log(parts);

const server = createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  const url = new URL(req.url, "http://localhost/3000");
  const color = url.searchParams.get("color");
  const size = url.searchParams.get("size");
  // console.log(req.headers);
  // console.log(req.url);
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const body = Buffer.concat(chunks).toString('utf-8')
  console.log(JSON.parse(body).password);

  switch (`${req.method} ${url.pathname}`) {
    case "GET /":
      res.statusCode = 200;
      res.end("HOME");
      break;
    case "POST /products":
      res.statusCode = 201;
      res.end(`PRODUCTS: ${color}, ${size}`);
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
