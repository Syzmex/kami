
import connection from './connection';

const connect = async () => {
  try {
    const { db, client } = await connection();
    try {
      await Promise.all([
        db.dropCollection( 'users' ),
        db.dropCollection( 'posts' ),
        db.dropCollection( 'xzy_posts' )
      ]);
    } catch ( e ) {}
    const usersCollection = db.collection( 'users' );
    await usersCollection.insert({
      hash: 'xzy',
      account: 'xzy',
      password: '123456',
      email: '252133226@qq.com',
      telephone: '18061870862',
      name: '许振宇',
      navigation: [{
        url: '/', text: '首页'
      }, {
        url: '/about', text: '关于'
      }], // url text
      categories: [{
        hash: '1', text: '日常'
      }], // hash text
      comments: [],
      like: [],
      feeds: [], // 寄语 createdatetime text
      posts: [],
      questions: [], // question answer 一般三个
      bio: '',
      isDelete: false,
      disabled: false
    });
    const user = await usersCollection.findOne({ hash: 'xzy' });
    const postsCollection = db.collection( 'xzy_posts' );
    await postsCollection.insert({
      user: user._id,
      userhash: user.hash,
      username: user.name,
      hash: 'the_first_post',
      title: '这是测试的第一篇',
      summary: '这是一款简洁的单栏的适合阅读的 Typecho 主题，适合放大段大段的文字、代码。因为考虑到一些阅读的舒适性的问题，所以栏宽设置的并不宽。',
      content: '这是一款简洁的单栏的适合阅读的 Typecho 主题，适合放大段大段的文字、代码。因为考虑到一些阅读的舒适性的问题，所以栏宽设置的并不宽。这是一款简洁的单栏的适合阅读的 Typecho 主题，适合放大段大段的文字、代码。因为考虑到一些阅读的舒适性的问题，所以栏宽设置的并不宽。这是一款简洁的单栏的适合阅读的 Typecho 主题，适合放大段大段的文字、代码。因为考虑到一些阅读的舒适性的问题，所以栏宽设置的并不宽。这是一款简洁的单栏的适合阅读的 Typecho 主题，适合放大段大段的文字、代码。因为考虑到一些阅读的舒适性的问题，所以栏宽设置的并不宽。这是一款简洁的单栏的适合阅读的 Typecho 主题，适合放大段大段的文字、代码。因为考虑到一些阅读的舒适性的问题，所以栏宽设置的并不宽。这是一款简洁的单栏的适合阅读的 Typecho 主题，适合放大段大段的文字、代码。因为考虑到一些阅读的舒适性的问题，所以栏宽设置的并不宽。',
      modifyDatetime: new Date(),
      publishDatetime: new Date(),
      location: '',
      comments: [],
      categorie: user.categories[0].hash,
      isDelete: false,
      isDraft: false,
      isTop: false
    });
    const post = await postsCollection.findOne({ hash: 'the_first_post' });
    const postsIndexCollection = db.collection( 'posts' );
    await postsIndexCollection.insert({
      collection: 'xzy_posts',
      user: post.user,
      originalId: post._id,
      hash: post.hash,
      title: post.title,
      summary: post.summary,
      modifyDatetime: post.modifyDatetime,
      publishDatetime: post.publishDatetime
    });

    client.close();
    // const comments = await db.collection( `${user.hash}_comments` );
    // return result;
  } catch ( e ) {
    console.log( e );
  }
  return {};
};

export default connect;
