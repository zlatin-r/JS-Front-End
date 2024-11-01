function solve(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let height = 0;
  let step = 1;

  while (base > 2) {
    let outerLayer = base * 4 - 4;
    let innerLayer = (base - 2) * (base - 2);

    if (step % 5 === 0) {
      lapisLazuli += outerLayer * increment;
    } else {
      marble += outerLayer * increment;
    }

    stone += innerLayer * increment;
    base -= 2;
    step++;
  }

  gold = base * base * increment;
  height = Math.floor(step * increment);

  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${height}`);
}

solve(11, 1);
solve(11, 0.75);
solve(12, 1);
solve(23, 0.5);
