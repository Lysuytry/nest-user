import { Max, Min, IsString } from "class-validator";
import { Transform } from "class-transformer";

const transformNumber = _ => (isNaN(+_) ? 0 : +_);

export class Pagination {
  @Max(20)
  @Min(0)
  @Transform(transformNumber)
  readonly limit: number = 20;

  @Min(0)
  @Transform(transformNumber)
  readonly offset: number = 0;

}
