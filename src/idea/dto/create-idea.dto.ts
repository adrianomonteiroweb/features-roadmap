import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateIdeaDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  hashtag: string;

  @IsString()
  @IsNotEmpty()
  idea: string;

  @IsInt()
  @Min(0)
  votes: number;

  @IsString()
  @IsNotEmpty()
  status: string;
}
