/* eslint-disable prettier/prettier */
import { Graph } from "../entities/graph.entity"

export function getPaths(records: any[], ...pathNames: string[]){
    return records.flatMap(record => {
        const paths = pathNames.map(pathName => new Graph(record.get(pathName)).getSegment());
        return paths.reduce((accumulator, current) => accumulator.concat(current), []);
    });
};

export function getNodes(records: any[], ...pathNames: string[]){
    return records.flatMap(record => {
        const nodes = pathNames.map(pathName => new Graph(record.get(pathName)).getNodes());
        const flattenedNodes = nodes.reduce((accumulator, current) => accumulator.concat(current));
        return Array.from(new Set(flattenedNodes))
    })
}
