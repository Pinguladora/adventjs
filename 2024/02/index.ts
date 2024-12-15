function createFrameTS(names: string[]): string {
    let longest = 0;
    for (let n of names) {
        if (n.length >= longest) {
            longest = n.length;
        }
    }
    // Add 2 from margins and 2 from frames
    const topBottomFrame = "*".repeat(longest + 4);

    let out = "";
    for (let n of names) {
        out += `* ${n}${" ".repeat(longest - n.length)} *\n`;
    }
    // Yes, it's not the most efficient method for concatenation.
    return topBottomFrame + "\n" + out + topBottomFrame;
}
