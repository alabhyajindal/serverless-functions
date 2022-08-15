const handler = (req, res) => {
  console.log(req);
  console.log(res):
  return res.send(`Hello what's up!`);
}

export default handler;
