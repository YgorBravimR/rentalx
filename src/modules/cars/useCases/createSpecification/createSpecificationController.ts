import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { Request, Response } from "express";
import { container } from 'tsyringe';
export class CreateSpecificationController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { description, name } = req.body;

        const createSpecificationUseCase = container.resolve(
            CreateSpecificationUseCase
        );

        await createSpecificationUseCase.execute({ description, name });

        return res.status(201).send();
    }
}
