const express = require("express");

const app = express();
app.use(express.json());

app.use(require("./routes/index"));

app.get("/allRoutes", (req, res) => {
  console.log(app._router.stack);
});

const port = process.env.PORT || 3005;

app.listen(port, () => console.log(`Listening on port ${port}...`));
