/* eslint-disable prettier/prettier */
export function getConditionals(mapQuery: Record<string, any>): string {
    const filters: string[] = [];

    for (const key in mapQuery) {
        const filterProperties = mapQuery[key];
        const filterConditions = [];

        for (const property in filterProperties) {
            const value = filterProperties[property];
            if (value !== undefined && value !== null && value !== '') {
                filterConditions.push(`${key}.${property} = '${value}'`);
            }
        }

        if (filterConditions.length > 0) {
            filters.push(`(${filterConditions.join(' OR ')})`);
        }
    }
    return filters.length > 0 ? 'AND ' + filters.join(' AND ') : 'OR null';
};

export function getSkipFilter(page: number, limit: number): number {
    return ((page - 1) * limit);
}