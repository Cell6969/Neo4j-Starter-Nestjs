/* eslint-disable prettier/prettier */
import { Node } from 'neo4j-driver';
import { Neo4jProperties } from '../interface/neo4j-properties.interface';


export class Nodes {
    constructor(private readonly nodes: Node) { }

    getProperties() {
        return this.nodes.properties as Neo4jProperties;
    }

    getNodeId() {
        return this.nodes.elementId;
    }

    getLabel() {
        return this.nodes.labels;
    }
}