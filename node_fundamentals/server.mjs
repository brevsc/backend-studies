import { createServer } from "node:http";
import { router } from "./router.mjs";

const server = createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost/3000");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const body = Buffer.concat(chunks).toString("utf-8");
  const handler = router[req.method][url.pathname];
  const routesHandler = () => {
    if (handler) {
      handler(req, res);
    } else {
      res.statusCode = 400;
      res.end("NOT FOUND");
    }
  };

  routesHandler();
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
