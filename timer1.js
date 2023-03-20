/*
Simple Alarm Clock App
---------------------

How to run:
node [positive number]

Goal:
The app will make a BEEP sound at the alotted time as passed.

*/
let args = process.argv;
args = args.slice(2); //reassigning array to args and ignoring the  node executable and file path.


const alarmClock = (time) => {
  
  if (!args.length) { //check to see if numbers are provided.
    console.log("Error: No numbers provided.");
    return;
  }

  for (const e of args) {
    if (typeof e === "number" && e > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
        process.stdout.write(`${e} seconds`);
        process.stdout.write("\n");
      },e * 1000);
      //checks if an input is a negative number.
    } else if (e < 0) {
      console.log("Error: You have provided a negative number. Please provide a positive number instead.");
      //checks if an input is not a number.
    } else if (typeof e !== "number") {
      console.log("Error: You have not provided a number. Alarm clock only accepts positive number values.");
    }
  }
};

alarmClock();