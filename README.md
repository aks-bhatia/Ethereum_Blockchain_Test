### Name - Akshay kumar.

# Project Title - API for getting total balance of a list of address.

> ### Dependencies and steps on how to install

Project is build using Node v16.13.0 and uses express framework. For development Typescript is used which is transpiled to JS in build directory.

Production dependencies

1. Express
2. Axios

> ### Steps to install

1. Fork the project using this link
2. run - npm install
3. run - npm run start (optional - PORT env var can be added)

   For testing api i have temporarily added etherscan api key to the endpoint. Dotenv can be used in development environment to manage multiple keys. In production environment this need to be replaced with env variables.

4. using postman run a post command
   http://localhost:4001/api/balance/getTotalBalance_MultiAddress
   and pass JSON object containing the addresses

{
"addresses":
[
"0x39a582bE8039a526Bdf4730e4D1E3E0fE1Bc811b",
"0x902c38F2bcddF95E7BCE50A14515B4B62F502Bf2",
"0xBcFE52fEF72A70AD09245e40AEAcCE4B1e851320",
"0x0560de6E5a452a00F58a90cb5501C18e77EB91B4"
]
}

> ### Other Information

To run tests use the command - npm run test

To run server in development mode - npm run start-dev

To build the project - npm run build

> ### Improvements

1. To prevent DOS attack rate limiter middleware can be used.
2. NestJs can be used to handle the modules in better way, also request body can be validated.
3. Logs can be stored in redis.
