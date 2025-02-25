import { Database } from "../middlewares/database.js";
import { randomUUID } from "node:crypto";
import { buildRoutePath } from "../utils/build-route-path.js";

const database = new Database();

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/users') ,
        handler: (request, response) => {
            const users = database.select('users');
            return response.end(JSON.stringify(users));
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/users') ,
        handler: (request, response) => {
            const { name, email } = request.body;

            const user = {
            id: randomUUID(),
            name: name,
            email: email
          }
      
          database.insert('users', user);
          return response.writeHead(201).end();
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/users/:id'), 
        handler: (request, response) => {
            
            const { id } = request.params;
            database.delete('users', id);

            return response.writeHead(204).end();
        }
    },
    {
        method: 'PUT',
        path: buildRoutePath('/users/:id'),
        handler: (request, response) => {

            const {id} = request.params;
            const {name, email} = request.body;
            database.update('users', id, {
                id,
                name,
                email,
            });

            return response.writeHead(200).end();
        }
    }
];