import { connectionDb } from './config.js'

export const migrationUp = () => {
  const connection = connectionDb();
  const createPeopleTable = `CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id));`;
  connection.query(createPeopleTable);
  connection.end();
  console.log('Migrations generated');
}
