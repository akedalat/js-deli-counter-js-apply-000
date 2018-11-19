function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
};

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
    return `Currently serving ${line.shift()}.`
};

function currentLine (line){
let i = 0;
while (i<line.length) {
  if (!line.length) {
    return "The line is currently empty."
  }
  return `The line is currently: ${i+1}. ${line[i]}.`
  i++;
}
}