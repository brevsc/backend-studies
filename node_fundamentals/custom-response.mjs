export function customResponse(res) {
  res.status = (statusCode) => {
    res.statusCode = statusCode;
    return res;
  };
  res.json = (value) => {
    try {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(value));
    } catch (err) {
      res.status(500).end(`error: ${err}`);
    }
  };
  return res;
}
