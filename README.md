# Leaderbord-project
> Leaderboard list app, using webpack and ES6 features

## Built With
- HTML
- CSS
- Javascript
- Linters
- Webpack


## Live Demo
N/A


## Getting Started
To get a local copy up and running follow these simple example steps. (NPM)
1. Open your terminal
2. Navigate to the directory where you want your project cloned
3. Clone the project using `git clone` or just copy the command below:
```  
   git clone https://github.com/didierganthier/leaderboard-project.git
```   
4. Open the project with your IDE. I use [Visual Studio Code](https://code.visualstudio.com/download)
5. Run `npm install` to get the dependencies

   not sure how to use npm? Read [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
6. Run webpack:
- Production:
   ``` 
      npm run build
   ```  
- Development:
  ```
   npm run start
  ```
  not sure how to use npm? Read [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### Prerequisites
- Having an IDE .
- Having Git installed and configured.

### Setup
- Clone the repository
- Open the folder with your IDE
- Get the dependencies with `npm install` 
  - not sure how to use npm? Read [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
- Read the [Leaderboard API documentation](https://www.notion.so/microverse/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3) to learn how to use this API.
- Create a new game with the name of your choice by using the API. You cab uncomment the line 11 in the `src/index.js` file to create a new game.
- Make sure that you saved the ID of your game that will be returned by API. You will need it to submit your scores.
- Comment the line 11 in the `src/index.js` file so that you don't create a new game every time you refresh the page.
- Replace the ID of the game in the `modules/getScores.js` file on line 2 and in the `modules/addScores.js` file on line 8.

## Authors

👤 *Author1*

- GitHub: [@didierganthier](https://github.com/didierganthier)
- Twitter: [@didierganthier_](https://twitter.com/didierganthier_)
- LinkedIn: [didierganthier](https://linkedin.com/in/didierganthier)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](./LICENSE) licensed.
