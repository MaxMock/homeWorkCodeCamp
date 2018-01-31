
async function createvote (db, userid,tweetid,choiceid) {
    const result = await db.execute(`
    INSERT INTO votes (user_id, tweet_id, choice_id) VALUES (?,?,?)
    `, [
        userid,tweetid,choiceid
    ])
    return result[0].insertId
  }
  async function createchoices (db,tweetid,content) {
    const result = await db.execute(`
    INSERT INTO tweet_choices (tweet_id, content) VALUES (?,?)
    `, [
        tweetid,content
    ])
    return result[0].insertId
  }
  module.exports = {
    createvote,
    createchoices
  }