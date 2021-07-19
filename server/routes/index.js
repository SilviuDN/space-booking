module.exports = app => {
  app.use("/api", require("./auth.routes.js"))
  app.use("/api/user", require("./user.routes"))
}