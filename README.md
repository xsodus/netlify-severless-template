# Simple Netlify Serverless Template
This is a template project. If you don't know how to create an endpoint on serverless, it will help you.

## How to run on local
- Install yarn. Below is the example command for IOS

`$ brew install yarn`
- Go to base directory then install the dependencies:

`$ yarn install`
- Run netlify serverless by this command:

`$ yarn lambda-serve`
- Try to call the endpoint via this URL:

http://localhost:9000/hello
- If you want to add a new endpoint, you can use `./functions/hello.js` as a template. And put the new source code into `./functions` directory.

## How to deploy
- Pack all source code and denpendency by this command
`$ yarn lambda-build`

- Push all changes in `./lambda` folder to master branch. The Netlify will automatically deploy your source code. 
You can see the deploy status at `Deploy` menu on Netlify admin page.

- Once the deployment is completed, you can test hello endpoint here:
https://wonderful-fermat-851a2b.netlify.com/.netlify/functions/hello
- You also see the other endpoint at `Functions` menu on Netlify admin page.
