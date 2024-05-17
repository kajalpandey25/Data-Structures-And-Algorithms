function Kajal() {
  return Sonam();
}

function Sonam() {
  return Sonali();
}

function Sonali() {
  return Lovely();
}

function Lovely() {
  // base case
  return true;
}

// console.log(Kajal());

function goToLunch(person){
    if(person === 5) return true;
    console.log(person);
    goToLunch(person + 1);
}

console.log(
    "outcome:", goToLunch(1)
);
