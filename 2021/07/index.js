// Recursive
export default function contains(store, product) {
    // Base case
    if (typeof store !== 'object' || store === null) {
        return store === product
    }

    for (let key in store) {
        if (contains(store[key], product)) {
            return true
        }
    }
    return false
}

// Iterative
export function containsIterative(store, product) {
    // Use a stack to hold the store
    const stack = [store];

    while (stack.length > 0) {
        const item = stack.pop();

        if (item === product) {
            return true;
        }

        // If the current value is an object, add its values to the stack
        if (typeof item === 'object' && item !== null) {
            for (let key in item) {
                stack.push(item[key]);
            }
        }
    }
    return false
}


const almacen = {
    'estanteria1': {
        'cajon1': {
            'producto1': 'coca-cola',
            'producto2': 'fanta',
            'producto3': 'sprite'
        }
    },
    'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
            'producto1': 'pantalones',
            'producto2': 'camiseta' // <- ¡Está aquí!
        }
    }
}

containsIterative(almacen, 'camiseta') // true

const otroAlmacen = {
    'baul': {
        'fondo': {
            'objeto': 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando'
        }
    }
}

containsIterative(otroAlmacen, 'gameboy') // false
