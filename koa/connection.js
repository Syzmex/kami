
import { MongoClient } from 'mongodb';

export default async () => {
  try {
    const url = 'mongodb://xzy:123456@localhost:27017/blog';
    const client = await MongoClient.connect( url );
    return { client, db: client.db( 'blog' ) };
  } catch ( e ) {
    console.log( 'connect:', e );
  }
  return null;
};
