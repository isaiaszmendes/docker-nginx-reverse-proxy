import http from 'http';
import { parse } from 'node:url'
import { migrationUp } from './db/migration.js';
import { createPerson, findPeople } from './db/queries.js';

const PORT = process.env.PORT || 3000;

/**
 * Run Migration
 * create people table
 */
migrationUp()

/**
 * Creating a server with default libraries nodejs
 */
http.createServer( async (request, response) => {
  const { url, method } = request;
  const { pathname } = parse(url);
  
  const route = `${method.toLowerCase()}:${pathname}`;

  if(['get:/'].includes(route)) {
    createPerson()
    const data = await findPeople();
    let people = ''
    for (let i = 0; i < data.length; i++) {
      const person = data[i];
      people += `<li>${person.name}</li>`;
    }

    response.writeHead(200, { 'Content-Type':'text/html'});
    
    response.end(`
      <h1>Full Cycle Rocks!</h1>
      <ul>
        ${people}
      <ul>
    `);
  }
}).listen(PORT,() => console.log('running at 3000'));