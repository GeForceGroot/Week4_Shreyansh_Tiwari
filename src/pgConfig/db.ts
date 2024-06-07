import { Sequelize } from 'sequelize'

const db = new Sequelize('postgres', 'postgres', 'Shrey@nsh2004', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5484
});

try {
  db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

db.sync()

export default db



