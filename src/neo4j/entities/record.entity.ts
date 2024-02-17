/* eslint-disable prettier/prettier */
import { Record } from 'neo4j-driver';

interface Options {
    exclude: string[]
}

export class records {
    constructor(private readonly record: Record) {}

    getProps(options: Options = { exclude: [] }) {
        const keys = this.record.keys;
        const props = {};
        keys.forEach(key => {
            const strKeys = String(key)
            if (!options.exclude.includes(strKeys)) {
                props[key] = this.record.get(key);
            }
        })
        return props;
    }
}