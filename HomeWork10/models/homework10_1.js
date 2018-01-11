const Koa = require('koa');
const app = new Koa();
const render = require('koa-ejs');
const path = require('path');
// const db =  require('./../config/database.js');
const db =  require('./../lib/db.js');
class data1
{
  constructor()
  {}
  async  getalluser(){  
      // query database
          const rows =  db.ex('SELECT * FROM user');    
          return rows;        
    }
 async  insert(firstname,lastname,salary,role)
    {
      const connection=  db;
       db.ex('INSERT INTO user (id,firstname,lastname,salary,role) VALUES (NULL,"'+firstname+'","'+lastname+'",'+salary+ ',"'+role+'")');
    }
  }
  module.exports= new data1();
  



    
  



