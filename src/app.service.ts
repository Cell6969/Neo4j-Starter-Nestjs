/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { Neo4jService } from './neo4j/neo4j.service';


@Injectable()
export class AppService {
  constructor(private readonly neo4jService: Neo4jService) { }

  async getData() {
    const template = `
    MATCH (n:Investor)
    RETURN n as investor LIMIT 10
    `
    const data = await this.neo4jService.read(template, {})
    return data.records.map(record => record.toObject())
  }
}
