// app.module.ts
import { Module } from '@nestjs/common';
import { TypedConfigModule, fileLoader, directoryLoader } from 'nest-typed-config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfig, RootConfig, TableConfig } from './config';

// Register TypedConfigModule
@Module({
  imports: [
    TypedConfigModule.forRoot({
      schema: RootConfig,
      // load: fileLoader(),
      load: directoryLoader({
        
        directory: `/home/camilo/Documentos/trabajo/nestjs/Musala/1juv6/config/env`,

      //   /* other cosmiconfig options */
      }),
    }),
  ],
  providers: [AppService],
  controllers: [AppController, TableConfig, DatabaseConfig, RootConfig],
})
export class AppModule {}
