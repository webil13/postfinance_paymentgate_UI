var cleave = new Cleave(".id-input", {
  blocks: [3, 3, 3, 3],
  delimeter: " ",
});
var cleave = new Cleave(".konto-input", {
  blocks: [2, 6, 1],
  delimeter: "-",
});
var cleave = new Cleave(".card-nr-input", {
  blocks: [8],
});
var cleave = new Cleave(".card-expiry-input", {
  blocks: [2, 2],
  delimeter: "/",
});
var cleave = new Cleave(".iban-input", {
  blocks: [4, 4, 4, 4, 4, 1],
  delimeter: " ",
});
