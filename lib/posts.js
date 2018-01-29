
import connection from './connection';

const connect = async () => {
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

export default connect;
