import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserCase } from "./AuthenticateUserCase";

export class AuthenticateController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { password, email } = req.body;

    const AuthenticateUseCase = container.resolve(AuthenticateUserCase);
    const authenticateInfo = await AuthenticateUseCase.execute({ password, email });
    return res.json(authenticateInfo);
  }
}