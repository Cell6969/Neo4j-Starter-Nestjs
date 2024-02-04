/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Neo4jService } from './neo4j/neo4j.service';

@Injectable()
export class AppService {
  constructor(private readonly neo4jService: Neo4jService) { }

  async getData() {
    console.log(this.neo4jService)
    const result = await this.neo4jService.read(`
      MATCH (n:Investor)
      RETURN n LIMIT 100
    `, {})

    return result.records.map(record => record.toObject())
  }
}
