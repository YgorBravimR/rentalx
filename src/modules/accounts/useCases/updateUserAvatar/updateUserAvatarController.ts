import { Request, Response } from "express";
// import { AppError } from "../../../../errors/AppError";
import { container } from "tsyringe";
import { CreateUserAvatarUseCase } from "./updateUserAvatarUseCase";



class CreateUserAvatarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const avatar_file = req.file.filename;
    const { id } = req.user;

    const updateUserAvatarController = container.resolve(CreateUserAvatarUseCase);

    await updateUserAvatarController.execute({ user_id: id, avatar_file });

    return res.status(204).send();
  }
}
export { CreateUserAvatarController };
