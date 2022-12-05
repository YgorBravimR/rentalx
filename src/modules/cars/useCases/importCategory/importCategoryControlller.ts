import { ImportCategoryUseCase } from "./importCategoryUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class ImportCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
    await importCategoryUseCase.execute(file);
    return res.json(file);
  }
}