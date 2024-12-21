// For the challenge
function createCube(size) {
    const cubeUp = [], cubeDown = []
    for (let i = 1; i <= size; i++) {
        let whitespace = size - i
        let margin = " ".repeat(whitespace)
        cubeUp.push(`${margin}${"/\\".repeat(i)}${"_\\".repeat(size)}`)

        whitespace = i - 1
        margin = " ".repeat(whitespace)
        cubeDown.push(`${margin}${"\\/".repeat(size - i + 1)}${"_/".repeat(size)}`)

    }
    return [...cubeUp, ...cubeDown].join("\n")
}

// For correct visualization
function createCube(size) {
    const cubeUp = [], cubeDown = []
    for (let i = 1; i <= size; i++) {
        let whitespace = size - i
        let margin = " ".repeat(whitespace)
        cubeUp.push(`${margin}${"/\\".repeat(i)}${"_\\".repeat(size)}${margin}`)

        whitespace = i - 1
        margin = " ".repeat(whitespace)
        cubeDown.push(`${margin}${"\\/".repeat(size - i + 1)}${"_/".repeat(size)}${margin}`)

    }
    console.log([...cubeUp, ...cubeDown].join("\n"))
    return [...cubeUp, ...cubeDown].join("\n")
}

const cubeOfOne = createCube(1)
const cubeOfTwo = createCube(2)
const cubeOfThree = createCube(3)

