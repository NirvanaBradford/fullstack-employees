import express from "express";
import router from "#api/employees";
const app = express();
export default app;

// TODO: this file!
app.use(express.json());

app.use("/", router);

app.listen(3000, () => console.log("server running on port 3000"));
