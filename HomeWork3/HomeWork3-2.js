
let fs = require('fs');
let robot = "";

function ReadRobotHead()
{ return new Promise(function(resolve, reject) { 
    fs.readFile('head.txt', 'utf8', function(err,headrobot) {
         if (err)
          reject(err);
           else
            resolve(headrobot);
        });
    });
 }
 function ReadRobotBody()
 { return new Promise(function(resolve, reject) { 
     fs.readFile('body.txt', 'utf8', function(err,bodyrobot) {
          if (err)
           reject(err);
            else
             resolve(bodyrobot);
         });
     });
  }
  function ReadRobotleg()
 { return new Promise(function(resolve, reject) { 
     fs.readFile('leg.txt', 'utf8', function(err,legrobot) {
          if (err)
           reject(err);
            else
             resolve(legrobot);
         });
     });
  }
  function ReadRobotfeet()
  { return new Promise(function(resolve, reject) { 
      fs.readFile('feet.txt', 'utf8', function(err,feetrobot) {
           if (err)
            reject(err);
             else
              resolve(feetrobot);
          });
      });
   }
   function readrobot()
   { return new Promise(function(resolve, reject) { 
       fs.readFile('robot.txt', 'utf8', function(err, datarobot) {
            if (err)
             reject(err);
              else
               resolve(datarobot);
           });
       });
    }

function writerobot(fullrobot) 
{
  
    return new Promise(function(resolve, reject) 
    {
       fs.writeFile('robot.txt',fullrobot,'utf8', function(err) {
         if (err)
          reject(err);
           else 
           resolve(); 
       }); 
   }); 
}
        async function copyFile() { 
            try {
                
                let datahead= await  ReadRobotHead();
                robot=robot+datahead+"\n";
                let databody= await  ReadRobotBody();
                robot=robot+databody+"\n";
                let dataleg= await  ReadRobotleg();
                robot=robot+dataleg+"\n";
                let datafeet= await  ReadRobotfeet();
                robot=robot+datafeet+"\n";
                await writerobot(robot);
                let RobotformTxt= await readrobot();
                console.log(RobotformTxt);
            } 
                catch (error) { console.error(error);
                }
            }
            copyFile();