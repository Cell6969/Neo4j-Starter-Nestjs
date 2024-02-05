/* eslint-disable prettier/prettier */
import neo4j, { Driver } from 'neo4j-driver';
import { Neo4jConnection } from './interface/neo4j-connection.interface';
import {Logger} from '@nestjs/common';


export const createDriver = async (connection: Neo4jConnection) => {
    // Create Driver Instance
    const driver: Driver = neo4j.driver(
        `${connection.scheme}://${connection.host}:${connection.port}`,
        neo4j.auth.basic(connection.username, connection.password),
        connection.config
    )

    await driver.verifyConnectivity()
    Logger.log('Neo4j Connected')

    return driver;
}

export const isTruthy = (value: unknown): value is true => {
    if (typeof value === 'boolean') {
        return value
    }

    if (typeof value === 'string' && value === 'true') {
        return true
    }

    return false
}

export const coerceNumber = (value: string | undefined): number | undefined => {
    if (value !== undefined) {
        const coerced = parseInt(value)
        return Number.isNaN(coerced) ? undefined : coerced
    }

    return undefined
}