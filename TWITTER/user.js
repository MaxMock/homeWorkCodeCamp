module.export={
    create
}
async function  create(db,users) {
    db.execute(`
    insert into users (username,email,password,name,status) values(?,?,?,?,?)
    `,[
        user.username,user.email,user.password,user.name,0
    ])
    return result[0].insertId
}
async function changePhoto(db,userId,photoUrl) {
    await function(params) {
        
    }
    
}