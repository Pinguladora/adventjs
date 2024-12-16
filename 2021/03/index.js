export default function isValid(letter) {
  return !new RegExp(/(\(\))|(\([^()]*$)|(^[^()]*\))|[\[\]{}]/).test(letter)
}

const letter = [
  "bici coche (balón) bici coche peluche",
  "peluche (bici [coche) bici coche balón", // True: [ and )
  "(a() bici (a)",                        // True: ()
  "(muñeca) consola bici",                // False
  "bici coche (a)",                       // False
  "{muñeca bici",                         // True: {
  "(bici} coche",                         // True: }
  "bici coche []",                        // True: []
  "muñeca (coche)",                       // False
  "bici (balón bici coche",                // True: unmatched (
  "(muñeca) consola bici"
];

letter.forEach(str => {
  console.log(isValid(str));
});
