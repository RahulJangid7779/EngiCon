// HANDLE AUTH MIDDLEWARE FOR ALL GET POST ,...request
// const adminauth = (req, res, next) => {
//   console.log("Admin auth is getting check out");
//   const token = "xyz";
//   const isAdminAuthorized = token === "xyz";
//   if (!isAdminAuthorized) {
//     res.send(401).send("Unauthorized request");
//   } else {
//     next();
//   }
// };
const adminauth = (req, res, next) => {
  console.log("Admin auth is getting check out ");
  const tokens = "XYZ";
  const isAdminAuthorized = tokens == "XYZ";
  if (!isAdminAuthorized) {
    res.send(401).send("Uauthorized request");
  } else {
    next();
  }
};
module.exports = {
  //   adminauth,
  adminauth,
};
