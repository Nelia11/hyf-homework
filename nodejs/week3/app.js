const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const {contactsAPIRouter} = require("./routes");
apiRouter.use("/contacts", contactsAPIRouter);

app.listen(port, () => {
console.log(`Listening on port ${port}`);
});