import { createServer } from "node:http";
import { Router } from "./router.mjs";

const router = new Router();

router.get("/", (req, res) => {
  res.end("Home");
});

router.get("/products/notebook", (req, res) => {
  res.end("Products - Notebook");
});

router.post("/products", (req, res) => {
  res.end("Products");
});

const server = createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost/3000");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const body = Buffer.concat(chunks).toString("utf-8");
  const handler = router.find(req.method, url.pathname);

  if (handler) {
    handler(req, res);
  } else {
    res.statusCode = 400;
    res.end("NOT FOUND");
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
