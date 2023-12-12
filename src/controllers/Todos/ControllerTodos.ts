import { Response, Request } from "express";
export class ControllerTodos {
  public getTodos(req: Request, res: Response) {
    res.send("Get todos");
  }
}
