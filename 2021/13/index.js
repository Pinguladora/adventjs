export default function wrapGifts(gifts) {
    if (gifts.length === 0) return []

    let borderSize = Math.max(...gifts.map(g => g.length))
    const border = "*".repeat(borderSize + 2)

    return [
        border,
        ...gifts.map(g => `*${g}*`),
        border
    ]
}

wrapGifts(["📷", "⚽️"])
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"])
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"])
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
