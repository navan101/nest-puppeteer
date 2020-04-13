import { Module } from '@nestjs/common';
// import { Connection } from 'typeorm';
// import { DatabaseModule } from './database/database.module';
import { SearchModule } from './modules/search/search.module';
import { CheckModule } from './modules/check/check.module';


@Module({
  imports: [
    // DatabaseModule,
    SearchModule,
    CheckModule
  ],
})
export class AppModule {
  // constructor(private readonly connection: Connection) {}
}
