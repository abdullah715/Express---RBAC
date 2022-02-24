module.exports = function (req, res, next) {
  let userPermissions = req.user.scope.map((e) => e.split(":").shift());

  console.log("user", req.user);
  let thisPath = req.method + "@" + req.path;

  let allowed = userPermissions.some((e) => thisPath.includes(e));

  if (allowed) {
    next();
  } else {
    console.log("Error", userPermissions, thisPath);
    res.status(401).json({
      error: "Not Allowed",
    });
  }
};
