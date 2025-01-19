export function decode(message: string): string {
    const match = message.match(/\([^()]*\)/)
    if (!match) {
        return message
    }

    // Reverse string
    while (/\([^()]*\)/.test(message)) {
        message = message.replace(/\([^()]*\)/g, (match) => {
            // Reverse string
            return Array.from(match.slice(1, -1))
                .reverse().join('');
        });
    }
    return message;
}

function decodeRecursive(message: string): string {
    const match = message.match(/\([^()]*\)/)
    if (!match) {
        return message
    }
    const reversedPair = Array.from(match[0].slice(1, -1))
        .reverse().join('');
    message = message.replace(match[0], reversedPair);
    const newMsg = decode(message);
    return newMsg;
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Step by step:
// 1. Reverse the nested -> sa(ualcatn)s
// 2. Reverse the remaining one -> santaclaus