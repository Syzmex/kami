
import { MongoClient } from 'mongodb';

const connect = async () => {
  try {
    const url = 'mongodb://xzy:123456@localhost:27017/blog';
    const client = await MongoClient.connect( url );
    const db = client.db( 'blog' );
    const result = await db.collection( 'users' ).find().toArray();
    return result;
  } catch ( e ) {
    return [];
  }
};

export default connect;
