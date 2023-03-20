/*
Simple Alarm Clock App
---------------------
Implementation:
An alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

How to run:
$ node timer1.js [positive number]

*/

let args = process.argv;
args = args.slice(2); //reassigning array to args and ignoring the  node executable and file path.


const alarmClock = (time) => {
  
  if (!args.length) { //check to see if numbers are provided.
    console.log("Error: No numbers provided.");
    return;
  }

  //looping through args array that consists of arguments passed to the CLI.
  for (const e of args) {

    //if argument is a number and positive, the app will execute the beeping sound at the time set out.
    if (!isNaN(e) && e > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
        process.stdout.write(`${e} seconds`);
        process.stdout.write("\n"); //will create a new line.
      },e * 1000); //convert argument to ms.

      //checks if an input is a negative number.
    } else if (e <= 0) {
      console.log("Error: You have provided a negative number or zero. Please provide a positive number instead.");
      //checks if an input is not a number.
    } else if (isNaN(e)) {
      console.log("Error: You have not provided a number. Alarm clock only accepts positive number values.");
    }
  }
};

alarmClock();