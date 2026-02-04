import { createServer } from "node:http";
import { Router } from "./router.mjs";
import { customRequest } from "./custom-request.mjs";
import { customResponse } from "./custom-response.mjs";

const router = new Router();

router.get("/", (req, res) => {
  res.status(200).end("Home");
});

router.get("/products/notebook", (req, res) => {
  res.status(200).end("Products - Notebook");
});

function postProduct(req, res) {
  const color = req.query.get('color');
  res.status(201).json({ product: 'Notebook', color });
}

router.post('/products', postProduct);

const server = createServer(async (request, response) => {
  const req = await customRequest(request);
  const res = customResponse(response);

  const handler = router.find(req.method, req.pathname);

  if (handler) {
    handler(req, res);
  } else {
    res.status(404).end("NOT FOUND");
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
