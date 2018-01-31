const Koa = require('koa');
const app = new Koa();
const render = require('koa-ejs');
const path = require('path');
// const db =  require('./../config/database.js');
const db =  require('./../lib/db.js');
class data1
{
  constructor()
  {
   
  }
  async  getalluser(id){  
      // query database
          const rows =  db.ex(`SELECT * FROM user where id = ?`,[id]);    
          return rows;        
    }
 async  insert(firstname,lastname,salary,role)
    {
      const connection=  db;
       db.ex('INSERT INTO user (id,firstname,lastname,salary,role) VALUES (NULL,?,?,?,?)',[firstname,lastname,salary,role]);
    }
    
  }
  module.exports= new data1();

  // class User {
  //   constructor (row) {
  //   this.id = row.id
  //   this.firstName = row.firstname
  //   this.lastName = row.lastname
  //   this.role = row.role;
  //   this.salary =row.salary
  //   }
  //   async save () {
  //     if (!this._id) {
  //     const result = db.ex(`
  //     insert into user (
  //     firstname, lastname
  //     ) values (
  //     ?, ?
  //     )
  //     `, [this.firstName, this.lastName])
  //     this.id = result.insertId
  //     return
  //     }
  //     return this._db.ex(`
  //     update user
  //     set
  //     firstname = ?,
  //     lastname = ?
  //     where id = ?
  //     `, [this.firstName, this.lastName, this.id])
  //     }
  //     remove () {
  //       return db.ex(`
  //       delete from user where id = ?
  //       `, [this.id])
  //       }
  //   }
  // module.exports = function () {
  //   return {
  //   async find (id) {
  //   const rows = await db.ex(`
  //   select
  //   id,firstname, lastname,salary,role
  //   from user
  //   where id = ?
  //   `, [id])
  //   return new User(rows[0])
  //   },
  //   async findAll () {
  //   const rows = await db.ex(`
  //   select
  //   firstname, lastname
  //   from user
  //   `)
  //   return rows.map((row) => new User(row))
  //   }
  // }
  // }
  



    
  



