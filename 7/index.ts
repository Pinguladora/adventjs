function fixPackagesRecursiveTS(packages: string): void | string {
    const match = packages.match(/\([^()]*\)/)
    if (!match) {
        return packages
    }

    // Reverse string
    const pairToReverse = match[0].slice(1, -1)
    const reversed = [...pairToReverse].reverse().join('')

    const updatedPackages = packages.replace(match[0], reversed)
    return fixPackagesRecursiveTS(updatedPackages)
}


function fixPackagesIterativeTS(packages: string): string {
    while (/\([^()]*\)/.test(packages)) {
        packages = packages.replace(/\([^()]*\)/g, (match) => {
            // Reverse string
            return [...match.slice(1, -1)].reverse().join('');
        });
    }
    return packages;
}