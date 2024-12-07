import re

expr = r"\([^()]*\)"
pattern = re.compile(expr)


# Use this for the Web version due to not processing imports
def fix_packages(packages: str) -> str:
    while re.search(r"\([^()]*\)", packages):
        packages = re.sub(
            r"\([^()]*\)", lambda match: match.group(0)[1:-1][::-1], packages
        )
    return packages


def fix_packages_iterative(packages: str) -> str:
    while re.search(pattern, packages):
        packages = re.sub(pattern, lambda match: match.group(0)[1:-1][::-1], packages)
    return packages


def fix_packages_recursive(packages: str) -> str:
    match = re.search(pattern, packages)
    if not match:
        return packages

    reversed_content = match.group(0)[1:-1][::-1]
    updated_packages = (
        packages[: match.start()] + reversed_content + packages[match.end() :]
    )

    return fix_packages_recursive(updated_packages)
