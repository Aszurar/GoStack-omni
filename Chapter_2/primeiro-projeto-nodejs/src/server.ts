import express, { Request, Response } from "express";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);


app.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'Hello GoStack' });
})


app.listen(3333, () => {
  console.log("Server is running on port 3333 💚💚💚");
}
);