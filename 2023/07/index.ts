export default function drawGift(size: number, symbol: string): string {
    if (size == 1) {
        return '#\n'
    }

    // Common helpers
    const commonDiff = size - 2
    const maxSymbolStr = symbol.repeat(commonDiff);

    // Borders
    const topBackBorder = ' '.repeat(size - 1) + '#'.repeat(size) + '\n';
    const topFrontBorder = '#'.repeat(size) + maxSymbolStr + '#\n';
    const frontBottomBorder = '#'.repeat(size) + '\n';

    // Box faces
    const frontFace: string[] = []
    const backFace: string[] = new Array(commonDiff);

    for (let i = 0; i < commonDiff; i++) {
        const leadingSpaces = ' '.repeat(commonDiff - i);
        const trailingSymbols = symbol.repeat(i);

        frontFace.push(`${leadingSpaces}#${maxSymbolStr}#${trailingSymbols}#\n`);

        // Inverse order
        backFace[commonDiff - i - 1] = `#${maxSymbolStr}#${trailingSymbols}#\n`;
    }

    // Form the 3D box
    return [topBackBorder, ...frontFace, topFrontBorder,
        ...backFace, frontBottomBorder].join('');
}

drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/
