
let args = process.argv;
args = args.slice(2); //reassigning array to args and ignoring the  node executable and file path.


const alarmClock = (time) => {
  //args.push(time);
  for (const e of args) {
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write(`${e} seconds`);
      process.stdout.write("\n");
    },e * 1000);
  }
};

alarmClock();