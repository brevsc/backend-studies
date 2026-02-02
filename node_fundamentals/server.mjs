import { createServer } from "node:http";

const server = createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost/3000");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const body = Buffer.concat(chunks).toString("utf-8");

  switch (`${req.method} ${url.pathname}`) {
    case "GET /":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(`
        <html>
          <head>
            <title>Mundo</title>
          </head>
          <body>
            <h1>Hello, world!</h1>
          </body>
        </html>
        `);
      break;
    case "POST /products":
      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({name: 'test'}));
      break;
    default:
      res.statusCode = 404;
      res.end("NOT FOUND");
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
