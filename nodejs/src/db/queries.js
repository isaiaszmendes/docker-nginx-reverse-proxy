import { connectionDb } from './config.js'

export const createPerson = (name = 'isaias') => {
  const connection = connectionDb();
  const createPersonSQL = "INSERT people(??) values(?)";
  const inserts = ['name', name];
  const sql = connection.format(createPersonSQL, inserts);

  connection.query(sql);
  connection.end();
  console.log('Person was inserted');
};

export const findPeople = () => {
  const connection = connectionDb();
  const findPeopleSQL = "SELECT * FROM people";

  return new Promise((resolve, reject) => {
    connection.query(findPeopleSQL, (err, rows) => {
      if (err) reject();
      const result = Object.values(JSON.parse(JSON.stringify(rows)));
      resolve(result)
    })
  })
};
