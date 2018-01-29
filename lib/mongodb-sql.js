
db.getCollection( 'users' ).insert({
  name: '',
  password: '',
  nickname: '',
  navigation: [], // url text
  categories: [], // hash text
  comments: [],
  like: [],
  feeds: [], //寄语 createdatetime text
  posts: [],
  intro: '',
  isDelete: false,
  disabled: false
});

db.getCollection( 'posts' ).insert({
  user: '',
  hash: '',
  title: '',
  summary: '',
  content: '',
  publishDatetime: '',
  location: '',
  comments: [],
  categorie: '',
  isDelete: false,
  isDraft: false,
  isTop: false
});

db.getCollection( 'comments' ).insert({
  user: '',
  post: '',
  parent: '',
  children: [],
  content: '',
  publishDatetime: '',
  modifylog: [], // publishDatetime content
  isDelete: false
});
