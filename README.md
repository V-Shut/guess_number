# Guess Number

The goal of this project is to create a game where a random number is generated on the server and the user must guess it. He can get 4 kinds of messages according to what he enters in the line

This project runs the server and client simultaneously, using Express for the backend and the standard client in the `frontend` directory.

## Description

This project uses Express to create a backend server and supports running a frontend application at the same time as the server.

The client is already bound to the server deployed on Vercel, the link settings can be changed in the App.js and Context.js files.

[Telegram bot](https://t.me/random_digit_bot) is linked to [Vercel](https://vercel.com/v-shuts-projects/guess-number-client) project and updates automatically, so you need chenge git files only.
Server deployed on [Vercel](https://vercel.com/v-shuts-projects/guess-number-server/api)

## How to install

To install all necessary dependencies, run the following command:

```bash
npm install
```

## Running the Server and Client

This project supports running both the server and client simultaneously. The following scripts are used:

### Scripts

- **`start`**: Starts both the server and client simultaneously using [concurrently](https://www.npmjs.com/package/concurrently).
- **`server`**: Starts the server-side application using `backend/index.js`. [nodemon](https://www.npmjs.com/package/nodemon) is used for automatic server restart on file changes.
- **`client`**: Starts the client-side application from the `frontend` directory using the `npm start` command.

### Dependencies

**DevDependencies:**
- **[concurrently](https://www.npmjs.com/package/concurrently) (v^8.2.2)**: Allows running multiple commands simultaneously.
- **[nodemon](https://www.npmjs.com/package/nodemon) (v^3.1.4)**: Tool for automatically restarting the server when files change.

**Dependencies:**
- **[cors](https://www.npmjs.com/package/cors) (v^2.8.5)**: Middleware for enabling CORS in an Express application.
- **[express](https://www.npmjs.com/package/express) (v^4.19.2)**: Framework for building backend servers in Node.js.

