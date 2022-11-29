const setAlarm = (employed, vacation) =>
  !vacation && !employed ? !vacation : vacation ? !vacation : employed;

console.log(setAlarm(true, true));
console.log(setAlarm(false, true));
console.log(setAlarm(true, false));
