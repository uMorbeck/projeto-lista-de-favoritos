const hello = (req, res) => {
  res.status(200).send("Hello World");
};

const task = (req, res) => {
  const task = req.body.task;
  res.status(200).send(task);
};

module.exports = {
    hello,
    task
}
