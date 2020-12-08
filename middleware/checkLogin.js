module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(400).send({ message: "please sign in first" });
  }

  next();
};
