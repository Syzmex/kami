
import connection from './connection';

export const getOnePost = async ( hash ) => {
  let post = {};
  try {
    const { db, client } = await connection();
    const postsCollection = db.collection( 'posts' );
    const postDoc = await postsCollection.findOne({ hash });
    if ( postDoc ) {
      const userpostsCollection = db.collection( postDoc.collection );
      post = await userpostsCollection.findOne({ _id: postDoc.originalId });
    }
    client.close();
  } catch ( e ) {}
  return post;
};

export const getPosts = async () => {
  try {
    const { db, client } = await connection();
    const usersCollection = db.collection( 'users' );
    const users = await usersCollection.find().toArray();
    const postGroup = await Promise.all( users.map( async ({ hash }) => {
      return await db.collection( `${hash}_posts` ).find().toArray();
    }));
    client.close();
    return postGroup.reduce(( posts, group ) => {
      return posts.concat( group );
    }, []);
  } catch ( e ) {}
  return [];
};
