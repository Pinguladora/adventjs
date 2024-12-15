def compile(instructions: list[str]) -> int:
    registers = {}
    i = 0

    def get_register_value(val: str) -> int:
        if val.lstrip("-").isdigit():
            # Make it a variable for 5 stars
            return int(val)
        return registers.get(val, 0)

    while i < len(instructions):
        cmd, *args = instructions[i].split()
        if cmd == "MOV":
            val, reg = args
            registers[reg] = get_register_value(val)
        elif cmd == "INC":
            registers[args[0]] = registers.get(args[0], 0) + 1
        elif cmd == "DEC":
            registers[args[0]] = registers.get(args[0], 0) - 1
        elif cmd == "JMP":
            reg, idx = args
            if registers.get(reg, 0) == 0:
                i = int(idx)
                continue
        i += 1
    return registers.get("A", None)
