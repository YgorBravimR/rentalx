import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./createUserUseCase";
class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password, driver_license } = req.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const result = await createUserUseCase.execute({
      name,
      email,
      password,
      driver_license,
    });
    if (result.has_error) {
      return res.status(500).send(result);
    }
    return res.status(201).send();
  }
}
export { CreateUserController };
