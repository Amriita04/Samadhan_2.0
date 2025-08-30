const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');

const adapter = new JSONFile('users.json');
const db = new Low(adapter);

await db.read();
db.data ||= { users: [] };

export default db;
