export const router = {
  GET: {
    "/": (req, res) => {
      res.end("Home");
    },
    "/products/notebook": (req, res) => {
      res.end("Products - Notebook");
    },
  },
  POST: {
    "/products": (req, res) => {
      res.end("Products");
    },
  },
};
