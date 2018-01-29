
import connection from './connection';

const connect = async ( hash ) => {
  try {
    const { db, client } = await connection();
    const postsCollection = db.collection( 'posts' );
    const post = await postsCollection.findOne({ hash });
    const userpostsCollection = db.collection( post.collection );
    const userpost = await userpostsCollection.findOne({ _id: post.originalId });
    client.close();
    return userpost;
  } catch ( e ) {}
  return {};
};

export default connect;
