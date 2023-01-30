import mysql from 'mysql';

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

export const connectionDb = () => mysql.createConnection(config);
