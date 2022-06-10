print(
  'Start #################################################################'
);

let db_schema = 'admin';
db = db.getSiblingDB(db_schema);

if (db_schema !== 'admin') {
  db.createUser({
    user: 'root',
    pwd: 'exemplo',
    roles: [{ role: 'readWrite', db: db_schema }]
  });
}

// Users
db.createCollection('url_shortener');
db.users.insertMany([
  {
    _id: ObjectId('62a380fdecc9caccbfc87a52'),
    url_original:
      'https://www.google.com/maps/search/Restaurantes/@-13.0037956,-38.5328562,20z/data=!4m7!2m6!3m5!2sPraia+do+Porto+da+Barra!3s0x71603840266d747:0xf1f0984f49d41950!4m2!1d-38.5328688!2d-13.003306'
  }
]);

print('END #################################################################');
