const net = require("net");
const { IP, PORT } = require("./constants");




const connect = function() {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // conn.on('connect', () => {
  //   conn.write(data);
  // });
  conn.on('data', (data) => { //get message back from server
    console.log('NEW MESSAGE FROM THE SERVER', data);
  });
  conn.on('connect', () => {
    conn.write("Name: Clinton");
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 1000);
  });

  conn.on('connect', () => {
    conn.write("Move: up");
  });
  
  // for (let i = 1; i <= 10 ; i++) { // moveup with timeout delay
  //     setTimeout(() => {
  //       conn.write('Move: up');
  //     }, 100 * i)
  //   };
 
  // for (let i = 1; i <= 10; i++) { //move up with setInterval
  //   setInterval(() => {
  //     conn.write('Move: left');
  //   }, 100);
  // }

  return conn;
};


//stdin.on('data', handleUserInput);






module.exports = {
  connect,
  //setupInput,
  // handleUserInput
};
