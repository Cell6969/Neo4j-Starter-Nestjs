/* eslint-disable prettier/prettier */
import { Path } from 'neo4j-driver';
import { Neo4jProperties } from '../interface/neo4j-properties.interface';


export class Graph {
    constructor(private readonly path: Path) { }

    getSegment() {
        return this.path.segments;
    }

    getNodeStart() {
        return this.path.start as Neo4jProperties;
    }

    getNodeEnd() {
        return this.path.end as Neo4jProperties;
    }

    getNodes(): Neo4jProperties[] {
        const nodesSet = new Set<Neo4jProperties>();
        nodesSet.add(this.getNodeStart());
        nodesSet.add(this.getNodeEnd());
        return Array.from(nodesSet);
    }
}