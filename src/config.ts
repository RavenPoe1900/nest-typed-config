// config.ts
import { Type } from 'class-transformer';
import { Allow } from 'class-validator';

// validator is omitted for simplicity
class TableConfig {
  @Allow()
  public readonly name!: string;
}

class DatabaseConfig {
  @Type(() => TableConfig)
  @Allow()
  public readonly table!: TableConfig;
}

class RootConfig {
  @Type(() => DatabaseConfig)
  @Allow()
  public readonly database!: DatabaseConfig;
}

export {
  TableConfig,
  DatabaseConfig,
  RootConfig,
}
