import { Request, Response } from "express";
import { CreateCategoryUseCase } from './createCategoryUseCase'
import { container } from 'tsyringe'

class CreateCategoryController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    const result = await createCategoryUseCase.execute({ name, description });

    return res.status(201).json(result);
  }
}

export { CreateCategoryController };
