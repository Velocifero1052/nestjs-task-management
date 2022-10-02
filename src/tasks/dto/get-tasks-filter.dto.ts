import { TaskStatus } from '../task.enum';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GetTasksFilterDto {
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  search?: string;
}