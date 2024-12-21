function wrapping(gifts) {
    return gifts.map(gift => {
        const wrapper = "*".repeat(gift.length + 2);
        return `${wrapper}\n*${gift}*\n${wrapper}`;
    });
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
