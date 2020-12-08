module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res
      .status(400)
      .send({ message: "You don't have enough credits, please top up first." });
  }

  next();
};
