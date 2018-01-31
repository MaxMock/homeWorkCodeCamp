
async function create (db, user) {
  const result = await db.execute(`
    insert into users (
      username, email, password, name, status
    ) values (
      ?, ?, ?, ?, ?
    )
  `, [
    user.username, user.email, user.password,
    user.name,0
  ])
  return result[0].insertId
}

async function insertchat (db,senderId,receiverId,Content) {
  const result = await db.execute(`
    insert into user_chats (
      sender_id,receiver_id,content,type
    ) values (
      ?,?,?,?
    )
  `, [
    senderId,receiverId,Content,0
  ])
  return result[0].insertId
}
async function selectsenderchat (db,sender) {
  const rows = await db.execute(`
  SELECT content,uc.created_at,u.id as userId ,username,Photo,cover,bio,
  (
 case
 when f.follower_id > 0
 then 'true'
 else 'flase'
 end
 )as isFollow
 FROM user_chats uc 
   left join users u on uc.receiver_id = u.id
   left join follows f on uc.sender_id = f.follower_id
   where uc.sender_id  = ?
`,[sender])
return rows[0]
}
async function selectreceiverchat (db,receiverid,senderid) {
  const rows = await db.execute(`
  SELECT content,uc.created_at, 
  (
    case
    when type > 0
    then 'true'
    else 'flase'
    end
    ) as isRead
  FROM user_chats uc 
  left join users u on uc.receiver_id = u.id
  where uc.sender_id= ? and uc.receiver_id= ? 
`,[receiverid,senderid])
return rows[0]
}
async function updatechatType (db,receiverid,senderid) {
  try{
  const rows = await db.execute(`
  update user_chats uc set
  type = 1
  where uc.sender_id= ? and uc.receiver_id= ?
`,[senderid,receiverid])
return true
}
  catch(err){
      return {
        "error": "unauthorized"
    }
    }
}
async function changePhoto (db, userId, photoUrl) {
  await db.execute(`
    update users set
      photo = ?
    where id = ?
  `, [photoUrl, userId])
}

async function changeCover (db, userId, photoUrl) {
  await db.execute(`
    update users set
      cover = ?
    where id = ?
  `, [photoUrl, userId])
}

async function follow (db,followerId,followingId) {
  const result = await db.execute(`
    insert into follows (
      follower_id,following_id
    ) values (
      ?, ?
    )
  `, [
    followerId,followingId
  ])
  return result[0].insertId
}
async function insernoti (db,userId,Title,conTent,Photo) {
  const result = await db.execute(`
  INSERT INTO notifications (user_id,title,content,photo, is_read) 
  VALUES ( ?,?,?,?,?)
  `, [
    userId,Title,conTent,Photo,0
  ])
  return result[0].insertId
}
async function chackfollow (db,followerId,followingId) {
  const result = await db.execute(`
  select follower_id,following_id from follows 
  where follower_id =? and following_id = ?
  `, [
    followerId,followingId
  ])
  return result[0].insertId
}
async function selectnoti (db,userid) {
  const result = await db.execute(`
  SELECT content as texts,user_id,title,photo,( 
    case when is_read = 1 then 'true' 
    else 'flase' end 
  ) as isRead
  ,created_at FROM notifications 
  where user_id=?
  `, [
    userid
  ])
  return result[0]
}

async function unfollow (db, followerId, followingId) {
  await db.execute(`
    delete from follows
    where follower_id = ? and following_id = ?
  `, [followerId, followingId])
}

async function signin (db,user) {
    const rows = await db.execute(`
    select id,username,email,password 
    from users 
    where email = ? and password = ?
  `,[user.email,user.password])
  return rows[0]
}

async function select (db,user) {
  const rows = await db.execute(`
  select
  username, email, password
  from users
  where  username = ?
  `, [user.username])
  return rows[0]
  }
  async function selectid (db,user) {
    const rows = await db.execute(`
    select
    username, email, password
    from users
    where  id = ?
    `, [user.id])
    return rows[0]
    }
  async function selectuserbyemail (db,user) {
    const rows = await db.execute(`
    select
    username, email, password
    from users
    where email=?
    `, [user.email])
    return rows[0]
    }
    async function selectid (db,user) {
      const rows = await db.execute(`
      select
      id,username,profilePhoto,
      coverPhoto,
      bio,
      isFollow,
      from users
      where  id = ?
      `, [user.id])
      return rows[0]
      }
  async function update (db,iduser,user) {
    try{
      await db.execute(`
    update users set
    name =?,
    Photo=?,
    cover=?,
    location=?,
    bio=?,
    theme=?,
    birth_date_d=?,
    birth_date_m=?,
    birth_date_y=?,
    show_y=?,
    show_dm=?
    where id =?
  `, [
    user.name,user.profilePhoto,user.coverPhoto,user.location,user.bio,user.theme,user.birthDateD,
    user.birthDateM,user.birthDateY,user.showBirthDateY,user.showBirthDateDM,iduser
  ])
  return "true";
}
  catch(err){
      return {
        "error": "unauthorized"
    }
    }
    
  }
  
  async function selectfollwer (db,follwer_id,following_id) {
    const rows = await db.execute(`
    SELECT u.id ,u.username, u.photo as profilePhoto ,
     u.cover as coverPhoto,u.bio, ( case when f.follower_id = ? then 'true' else 'flase' end ) as isfollow FROM follows f 
     left join users u on f.follower_id =u.id 
    where f.follower_id = ? and f.following_id= ?
    `, [follwer_id,follwer_id,following_id])
    return rows[0]
    }

    async function selectfollwing (db,follwing_id) {
      const rows = await db.execute(`
      SELECT u.id ,
      u.username,
      u.photo as profilePhoto ,
      u.cover as coverPhoto,u.bio,COUNT(f.following_id) as isfollows
      FROM users u
      left join follows f on u.id = f.following_id
      where follwer_id = ? and f.following_id = ?
      `, [follwing_id])
      return rows[0]
      }
      async function selectuser (db,user_id) {
        const rows = await db.execute(`
        SELECT* FROM users u where u.id = ?
        `,[user_id])
        return rows[0]
        }

      module.exports = {
        selectnoti,
        selectuser,
        insernoti,
        insertchat,
        selectsenderchat,
        updatechatType,
        selectreceiverchat,
        selectfollwer,
        selectfollwing,
        selectid,
        update,
        selectuserbyemail,
        select ,
        signin,
        create,
        changePhoto,
        changeCover,
        follow,
        unfollow
      }
    