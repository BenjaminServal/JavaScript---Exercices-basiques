let number = parseInt(prompt("Hey ! Welcome in Mario's Pyramid ! How many stage do you want ?"));

function pyram(num) {
  const space = " ";
  const hash = "#";
  for (let i = 1; i <= num; i++) {
    console.log(space.repeat(num-i) + hash.repeat(i));
  }
}

pyram(number);