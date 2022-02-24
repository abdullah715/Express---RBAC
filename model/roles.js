module.exports = [
  {
    name: "ADMIN",
    scope: ["GET@/project/self/:id", "GET@/project/others/:id", "GET@/"],
  },
  { name: "DEV", scope: ["GET@/api"] },
];
