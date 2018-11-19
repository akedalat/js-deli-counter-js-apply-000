function takeANumber (line, name){
katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${line.lenght} in line.`)
};

function nowServing (katzDeliLine){
let i = 0;
while (i<katzDeliLine.lenght) {
  if (katzDeliLine.lenght = 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return katzDeliLine [i];
  }
i++;
}
};
