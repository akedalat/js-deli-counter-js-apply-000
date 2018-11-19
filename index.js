function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
};

function nowServing (line){
let i = 0;
while (i<line.lenght) {
  if (line.lenght = 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return line [i];
    line.shift();
  }
i++;
}
}
