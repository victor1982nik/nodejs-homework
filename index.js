const http = require('http');
const fs = require('fs');

const data =  fs.readFileSync("./index.html");
 
const requestHandler = (request, responce) => {
  responce.writeHead(200, {"Contect-type": "text/html"});
  responce.end(data)
}
 const server = http.createServer(requestHandler);
 server.listen(8081, (err)=> {
  if(err){
    console.error("error at server launch", err)
  }
  console.log("server started")
 });





/*const readline = require('readline');
const fs = require('fs').promises;
const { program } = require('commander');
require('colors');
program.option(
  '-f, --file [type]',
  'file for saving game results',
  'results.txt',
);
program.parse(process.argv);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
const logFile = program.opts().file;
const mind = Math.floor(Math.random() * 10) + 1;

const isValid = value => {
  if (isNaN(value)) {
    console.log('Введіть число!'.red);
    return false;
  }
  if (value < 1 || value > 10) {
    console.log('Число має бути в діапазоні від 1 до 10'.red);
    return false;
  }
  return true;
};

const log = async data => {
  try {
    await fs.appendFile(logFile, `${data}\n`);
    console.log(`Вдалося зберегти результат у файл ${logFile}`.green);
  } catch (err) {
    console.log(`Не вдалося зберегти файл ${logFile}`.red);
  }
};

const game = () => {
    
  rl.question(
    'Введіть число від 1 до 10, щоб вгадати задумане: '.yellow,
    value => {
      let a = +value;
      if (!isValid(a)) {
        game();
        return;
      }
      count += 1;
      
      if (a === mind) {
        console.log('Вітаю Ви вгадали число за %d крок(ів)'.green, count);
        log(
          `${new Date().toLocaleDateString()}: Вітаю Ви вгадали число за ${count} крок(ів)`,
        ).finally(() => rl.close());
        return;
      }
      console.log('Ви не вгадали ще спроба'.red);
      game();
    },
  );
};

game();*/
// const fs = require("fs").promises;

// //fs.readFile("./data.txt",'utf-8').then((data)=> console.log(data))


// (async () =>{
//     const data = await fs.readFile("./data.txt");
//     //await fs.writeFile("./data1.txt",data,'utf-8');
//     //await fs.rename("./data2.txt","./tmp/data2.txt")
//     //await fs.unlink("./data1.txt")
//     //console.log(await fs.readdir("./tmp"))
// console.log(data.toString());
// })()


///console.log("111")
//const path = require("path");
//console.log(path.normalize("index.js"))
//const dateUtils = require('./dateUtills');
//global.someVar = "This is global variable";
//console.log(dateUtils.getCurrentDate())
//console.log(__dirname)
//console.log(__filename)
// const Calc = require("calc-js").Calc;
// console.log(process.argv);
// const [,,a,b] = process.argv;
// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish())