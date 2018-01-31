module.exports = {
  create,
  addPhoto,
  like,
  unlike
}
async function retweets (db,tweet) {
  const result = await db.execute(`
  INSERT INTO retweets (user_id, tweet_id, content) 
  VALUES (?,?,?)
  `, [
    tweet.user_id, tweet.tweet_id, tweet.content
  ])
  return result[0].insertId
}
async function hashtags (db,hashtag) {
  const result = await db.execute(`
  INSERT INTO hashtags (name) VALUES (?);
  `, [
    hashtag
  ])
  return result[0].insertId
}
async function createtweets (db, userId, tweet) {
  const result = await db.execute(`
    insert into tweets (
      user_id, content, type
    ) values (
      ?, ?, ?
    )
  `, [
    userId, tweet.content, tweet.type
  ])
  return result[0].insertId
}

async function addPhoto (db, tweetId, photoUrl) {
  const result = await db.execute(`
    insert into tweet_photos (
      tweet_id, url
    ) values (
      ?, ?
    )
  `, [
    tweetId, photoUrl
  ])
  return result[0].insertId
}

async function like (db, userId, tweetId) {
  await db.execute(`
    insert into tweet_likes (
      user_id, tweet_id
    ) values (
      ?, ?
    )
  `, [
    userId, tweetId
  ])
}

async function unlike (db, userId, tweetId) {
  await db.execute(`
    delete from tweet_likes
    where user_id = ? and tweet_id = ?
  `, [userId, tweetId])
}
