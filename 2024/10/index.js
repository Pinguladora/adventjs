/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
    const registers = {};
    let i = 0;

    while (i < instructions.length) {
        const [cmd, ...args] = instructions[i].split(" ");

        if (cmd === "MOV") {
            const [val, reg] = args;
            registers[reg] = Number(val) ? Number(val) : (registers[val] || 0);
        } else if (cmd === "INC") {
            registers[args[0]] = (registers[args[0]] || 0) + 1;
        } else if (cmd === "DEC") {
            registers[args[0]] = (registers[args[0]] || 0) - 1;
        } else if (cmd === "JMP") {
            const [reg, idx] = args;
            if ((registers[reg] || 0) === 0) {
                i = parseInt(idx);
                continue;
            }
        }
        i++;
    }
    return registers["A"];
}