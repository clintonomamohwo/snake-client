const stdin = process.stdin;

let connection;

let w = "Move: up";
let a = "Move: left";
let s = "Move: down";
let d = "Move: right";


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;

};

const handleUserInput = function(key) {

  if (key === '\u0003') {
    process.exit();
  }
  if (key === "w") {
    connection.write(w);
  } else if (key === "a") {
    connection.write(a);
  } else if (key === "s") {
    connection.write(s);
  } else if (key === "d") {
    connection.write(d);
  } else if (key === 'q') {
    connection.write('Say: FOOD!');
  }
  
};

module.exports = {
  setupInput,
};






// // const setupInput = (conn) => {
// //   connection = conn;
// };