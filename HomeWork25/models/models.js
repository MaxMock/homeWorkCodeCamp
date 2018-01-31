const Koa = require('koa');
const app = new Koa();
const render = require('koa-ejs');
const path = require('path');
// const db =  require('./../config/database.js');
const db =  require('./../lib/db.js');
 function createEntity (row) {
  return {
    
    isbn:row.isbn,
    cardid:row.cardid,
    bookids:row.bookids,
    BookId:row.BookId,
    cardTitleisbn:row.cardTitleisbn,
    inputimg_isbn:row.inputimg_isbn,
    PromotionDate_isbn:row.PromotionDate_isbn,
    PromotionDate:row.PromotionDate,
    price_isbn:row.price_isbn,
    editisbn:row.editisbn,
    deletecardisbn:row.deletecardisbn,
    title:row.title,
    price:row.price,
    imageUrl:row.imageUrl
  }
  }
  
    async function find (db, id) {
    const rows = await db.ex(`
    select
    id,
    todo_name,
    todo_text,
    complete
    from todo_list
    where id = ?
    `, [id])
    return createEntity(rows[0])
    }
    async function findAll (db) {
    const rows = await db.ex(`
    select
    isbn,
    cardid,
    bookids,
    BookId,
    cardTitleisbn,
    inputimg_isbn,
    PromotionDate_isbn,
    PromotionDate,
    price_isbn,
    editisbn,
    deletecardisbn,
    title,
    price,
    imageUrl
    from books
    `)
    return rows.map(createEntity)
    }
    async function storeinsert (db,book) {
    const result = await db.ex(`
    insert into books (
      isbn,
      cardid,
      bookids,
      BookId,
      cardTitleisbn,
      inputimg_isbn,
      PromotionDate_isbn,
      PromotionDate,
      price_isbn,
      editisbn,
      deletecardisbn,
      title,
      price,
      imageUrl
    ) values (
    ?,?,?,?,?,?,?,?,?,?,?,?,?,?
    )
    `, [   book.isbn,
      book.cardid,
      book.bookid,
      book.BookId,
      book.cardTitleisbn,
      book.inputimg_isbn,
      book.PromotionDate_isbn,
      book.PromotionDate,
      book.price_isbn,
      book.editisbn,
      book.deletecardisbn,
      book.title,
      book.price,
      book.imageUrl])

    return
    }
    async function storeupdate (db,book) {
      const result =await db.ex(`
    update books
    set
    isbn=?,
    cardid=?,
    bookids=?,
    BookId=?,
    cardTitleisbn=?,
    inputimg_isbn=?,
    PromotionDate_isbn=?,
    PromotionDate=?,
    price_isbn=?,
    editisbn=?,
    deletecardisbn=?,
    title=?,
    price=?,
    imageUrl=?
    where isbn=?
    `, [book.isbn,
      book.cardid,
      book.bookid,
      book.BookId,
      book.cardTitleisbn,
      book.inputimg_isbn,
      book.PromotionDate_isbn,
      book.PromotionDate,
      book.price_isbn,
      book.editisbn,
      book.deletecardisbn,
      book.title,
      book.price,
      book.imageUrl,book.isbn]) 
      return
    }
    async function remove (db,id) {
    return db.ex(`
    delete from books where isbn = ?
    `, [id])
    }
    module.exports = {
    find,
    findAll,
    storeinsert,
    storeupdate,
    remove
    }



  



    
  



