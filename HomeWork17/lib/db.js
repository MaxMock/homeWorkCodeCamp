
const Koa = require('koa');
const app = new Koa();
const render = require('koa-ejs');
const path = require('path');
const db =  require('./../config/database.js');
class Database
{
  constructor(objdata)
  { 
    this.host =objdata.host;
    this.username = objdata.username;
    this.password = objdata.password;
    this.database =objdata.database;

    this.instance= this.condb(this.host,this.username,this.password,this.database);
    }
    async condb(host,username,password,database)
    {
      const mysql = require('mysql2/promise');
    let r = await mysql.createConnection(
        {
          host: host,
          user: username,
          password: password,
          database: database
        });
        return r;
    } 
    async ex(sql,value)
      {
      let connection=await this.instance;
      const [rows, fields] = await connection.execute(sql,value);
     return rows;
      }
  }
module.exports= new Database(db);
