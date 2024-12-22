function executeCommands(commands) {
    const registers = {
        "V00": 0, "V01": 0, "V02": 0, "V03": 0,
        "V04": 0, "V05": 0, "V06": 0, "V07": 0,
    };
    let i = 0;

    const fixOverflow = (num) => (num + 256) % 256;

    while (i < commands.length) {
        const parts = commands[i].replace(",", " ").split(" ");
        const cmd = parts[0];
        const args = parts.slice(1);
        
        if (cmd === "MOV") {
            const [val, reg] = args;
            registers[reg] = Number(val) ? Number(val) : registers[val];
        } else if (cmd === "INC") {
            registers[args[0]] = fixOverflow(registers[args[0]] + 1);
        } else if (cmd === "DEC") {
            registers[args[0]] = fixOverflow(registers[args[0]] - 1);
        } else if (cmd === "ADD") {
            const [regA, regB] = args;
            registers[regA] = fixOverflow(registers[regA] + registers[regB]);
        } else if (cmd === "JMP") {
            if (registers["V00"] !== 0) {
                i = Number(args[0]);
                continue;
            }
        }
        i++;
    }
    return Object.values(registers);
}

executeCommands([
    'MOV 5,V00',  // V00 is 5
    'MOV 10,V01', // V01 is 10
    'DEC V00',    // V00 is now 4
    'ADD V00,V01', // V00 = V00 + V01 = 14
])

// Output: [14, 10, 0, 0, 0, 0, 0]

executeCommands([
    'MOV 255,V00', // V00 is 255
    'INC V00',     // V00 is 256, overflows to 0
    'DEC V01',     // V01 is -1, overflows to 255
    'DEC V01'      // V01 is 254
])
// Output: [0, 254, 0, 0, 0, 0, 0]

executeCommands([
    'MOV 10,V00', // V00 is 10
    'DEC V00',    // decrement V00 by 1  <---┐
    'INC V01',    // increment V01 by 1      |
    'JMP 1',      // loop until V00 is 0 ----┘
    'INC V06'     // increment V06 by 1
])

// Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]