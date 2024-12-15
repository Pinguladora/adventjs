function minMovesToStablesTS(reindeer: number[], stables: number[]): number {
    const sortedReindeer = [...reindeer].sort((a, b) => a - b);
    const sortedStables = [...stables].sort((a, b) => a - b);

    return sortedReindeer.reduce((total, r, i) => total + Math.abs(r - sortedStables[i]), 0);
}