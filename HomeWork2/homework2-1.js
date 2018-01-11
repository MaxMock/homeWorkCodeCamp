let fs = require('fs');
let robot="";
fs.readFile('head.txt', 'utf8', function(err, datahead)
  { robot=robot+datahead+"\r\n";
    fs.readFile('body.txt', 'utf8', function(err, databody)
        { 
            robot=robot+databody+"\r\n"
            fs.readFile('leg.txt', 'utf8', function(err, dataleg) 
                { 
                    robot=robot+dataleg+"\r\n"
                    fs.readFile('feet.txt', 'utf8', function(err, datafeet) 
                        { 
                            robot=robot+datafeet+"\r\n"
                            fs.writeFile('robot.txt', robot, 'utf8', function(err, data)
                             {
                                fs.readFile('robot.txt', 'utf8', function(err, data) 
                                {
                                    console.log(data);
                                }); 
                             });
                        }); 
                }); 
        });        
 });
// window ใช้\r\n 