import * as express from "express"
import { Request, Response } from "express"
import { Pedro } from "@/model"

const message = "Hello World!"

console.log(message, { PEDRO: new Pedro().pedro() })

const app = express.application

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ PEDRO: ">:()" })
})

app.listen(3000, () => console.log("Listening on port 3000"))
