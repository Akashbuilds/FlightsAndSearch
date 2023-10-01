## Welcome To Flights And Search.
    ->A microservice for booking and searching flights following MVC pattern.

 ## Project Setup
    ->Clone the project on your local using `git clone <repo-url>`
    ->Execute `npm install` on the same path as the root directory of the project
    ->Create the `.env` folder in your root directory and add the following environment variable :- `PORT= 3000`
    ->Inside the `src/config` folder add the `config.json`and add this json
    ```
    {
  "development": {
    "username": "You_DB_login_Name",
    "password": "Your_DB_Password",
    "database": "Your_DB_Name",
    "host": "127.0.0.1",
    "dialect": "mysql"
        }
    }
    ```   