let fs = require('fs');
let robot = "";

let RobotHead =   new Promise(function (resolve, reject) 
{
    fs.readFile('head.txt', 'utf8', function(err, datahead)
    {

        if (err)
        reject(err);
        else
        resolve(datahead);
       });
   });

   let RobotBody =   new Promise(function (resolve, reject) 
        {
            fs.readFile('body.txt', 'utf8', function(err, databody)
            {
   
                if (err)
                reject(err);
                else
                resolve(databody);
               });
           });

           let RobotLeg =   new Promise(function (resolve, reject) 
           {
               fs.readFile('leg.txt', 'utf8', function(err, dataleg)
               {
                   if (err)
                   reject(err);
                   else
                   resolve(dataleg);
                });
            });
            let RobotFeet =   new Promise(function (resolve, reject) 
            {
                fs.readFile('feet.txt', 'utf8', function(err, datafeet)
                {
                    if (err)
                    reject(err);
                     else
                     resolve(datafeet);
                    });
                });
                fs.readFile('robot.txt', 'utf8', function(err, data)
                {
                    console.log(data);
                }); 
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

         Promise.all([RobotHead,RobotBody,RobotLeg,RobotFeet]) 
         .then(function(result)
         {
             for(i=0;i<result.length;i++)
             {
                 robot=robot+result[i]+"\n";
             }
             writerobot(robot);
      
            readrobot();
           
         })
        .catch(function(error)
        {
            console.error("There's an error", error);
        });
