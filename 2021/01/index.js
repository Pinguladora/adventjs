// No regex
export default function contarOvejas(ovejas) {
    return ovejas.filter(({ color, name }) => color === "rojo" &&
        name.toLowerCase().includes("a") &&
        name.toLowerCase().includes("n"))
}

// With regex
export function contarOvejasRegex(ovejas) {
    return ovejas.filter(({ color, name }) =>
        color === "rojo" && /a.*n|n.*a/i.test(name)
    );
}


const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' }
]

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)