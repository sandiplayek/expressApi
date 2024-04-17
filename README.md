# Node Express based API with mysql2
Tutorial: https://www.youtube.com/watch?v=Hej48pi_lOc

# Remember: For free start without git 
make a directory
create a  database.js file

# to create package.json file
npm init -y 
# to install mysql2
npm i mysql2
# to access .env file 
npm i dotenv
# to install express
npm i express
# to install nodemon in developement server
npm i -D nodemon
# to run npm automaticlly with a specific page here app.js
# add these lines in package .json

"scripts": {
    "dev": "npx nodemon app.js"
  },

  # to run in terminal
  npx nodemon app.js
  or
  npm run dev
  or
  yarn dev


  # to accept json data in post method 
  app.use(express.json())


  
  


