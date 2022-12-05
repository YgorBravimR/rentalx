import { Specification } from "../../entities/Specification";
import { Repository, getRepository } from 'typeorm'
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../interfaces/ISpecificationRepository";

export class SpecificationRepositories implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification)
  }

  async findByName(name: string): Promise<Specification> {
      const specification = await this.repository.findOne({name})
      return specification
  }

  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name
    })

    await this.repository.save(specification)
  }
}