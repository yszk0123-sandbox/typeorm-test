import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entity/User';

createConnection()
  .then(async connection => {
    try {
      console.log('Inserting a new user into the database...');
      const user = new User();
      user.firstName = 'Timber';
      user.lastName = 'Saw';
      user.age = 25;
      user.dateAsDate = new Date('2000-01-01T00:00:00Z');
      user.dateAsString = new Date('2000-02-01T00:00:00Z').toISOString();
      await connection.manager.save(user);
      console.log('Saved a new user with id: ' + user.id);

      console.log('Loading users from the database...');
      const users = await connection.manager.find(User);
      console.log('Loaded users: ', users);

      console.log(
        'Here you can setup and run express/koa/any other framework.'
      );
    } finally {
      await connection.close();
    }
  })
  .catch(error => console.log(error));
