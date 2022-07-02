import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIdeaDto } from './dto/create-idea.dto';
import { UpdateIdeaDto } from './dto/update-idea.dto';
import { Idea } from './entities/idea.entity';

@Injectable()
export class IdeaService {
  constructor(
    @InjectRepository(Idea) private readonly repository: Repository<Idea>,
  ) {}

  create(createIdeaDto: CreateIdeaDto): Promise<Idea> {
    const idea = this.repository.create(createIdeaDto);

    return this.repository.save(idea);
  }

  findAll(): Promise<Idea[]> {
    return this.repository.find();
  }

  // findOne(id: string): Promise<Idea> {
  //   return this.repository.findOne(id);
  // }

  // update(id: number, updateIdeaDto: UpdateIdeaDto) {
  //   return `This action updates a #${id} idea`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} idea`;
  // }
}
