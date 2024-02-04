/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Neo4jModule } from './neo4j/neo4j.module';
import * as dotenv from 'dotenv';
dotenv.config();

console.log(process.env.NEO4J_HOST);
@Module({
  imports: [
    Neo4jModule.forRoot({
      scheme: 'bolt' ,
      host: process.env.NEO4J_HOST,
      port: process.env.NEO4J_PORT,
      username: process.env.NEO4J_USERNAME,
      password: process.env.NEO4J_PASSWORD,
      database: process.env.NEO4J_DATABASE,
      disableLosslessIntegers: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
