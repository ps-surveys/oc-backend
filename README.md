# Psychological Studies Surveys (Backend)

First install the database server before compiling the project dependencies.

## Database configuration

In the `src/config/global.ts` file the host (for local tests), bucket name, user and password must be placed.

___

# Compiling dependencies
To install the Node packages run the following command in the root folder of the project:

    npm install

Note: sometimes when the project dependencies do not compile it is recommended to remove the `/node_modules` folder from the project root folder and the package-lock.json file and remove the cache when installing dependencies with `npm install r -c`_.

___

# Build and run API
To build the project and start running the backend, run the following command:

    npm run buildandrun