// app.service.ts
import { Injectable } from '@nestjs/common';
import { DatabaseConfig, RootConfig, TableConfig} from './config';

@Injectable()
export class AppService {
  // inject any config or sub-config you like
  constructor(
    private readonly config: RootConfig,
    private readonly databaseConfig: DatabaseConfig,
    private readonly tableConfig: TableConfig,
  ) {}

  // enjoy type safety!
  public show(): string {
    const out = [
      `root.name: ${this.config.database.table.name}`,
      `root.database.name: ${this.databaseConfig.table.name}`,
      `root.database.table.name: ${this.tableConfig.name}`,
    ].join('\n');

    return `${out}\n`;
  }
}
