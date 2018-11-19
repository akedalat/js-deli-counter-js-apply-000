function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
};

function nowServing (line){

  if (!line.lenght) {
    return 'There is nobody waiting to be served!'
  } else {
    return `currently serving ${line.shift}`;

}
}
