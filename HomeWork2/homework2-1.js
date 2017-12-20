let fs = require('fs');
let robot="";
fs.readFile('head.txt', 'utf8', function(err, datahead)
 { robot=robot+datahead+"\n"
fs.readFile('body.txt', 'utf8', function(err, databody)
 { robot=robot+databody+"\n"
fs.readFile('leg.txt', 'utf8', function(err, dataleg) 
{ robot=robot+dataleg+"\n"
fs.readFile('feet.txt', 'utf8', function(err, datafeet) 
{ robot=robot+datafeet+"\n"
fs.writeFile('robot.txt', robot, 'utf8', function(err, data) {
     fs.readFile('robot.txt', 'utf8', function(err, data) {
          console.log(data);
         }); 
        });
 }); 
}); 
});        
}); 