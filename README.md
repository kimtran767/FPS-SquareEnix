## [Final Enix](https://finalenix.herokuapp.com/#/)



<img src="https://github.com/kimju-tran/FPS-SquareEnix/blob/master/readme_img/splash_page.gif" align ="center"><br>

## Background 
Final Enix is a single page application where users is allow to read about the lastest game's functionality with screen shots, read about latest article about the game, and be able to post a review about the article.

## Technologies
* **Ruby on Rails:** Rails was used to manage the application's backend interface.
* **PostgreSQL:** PostgreSQL was used as the primary database for the project. 
* **React/Redux:** React and Redux libraries were used to facilitate frontend development.
* **Heroku:** Heroku was used to host the web application online.
* **AWS S3:** Amazon Webservice S3 was used for cloud image storage to allow users to upload custom profile pictures.
* **CSS/HTML:** CSS/HTML was used to styled each component.

## Features

### User Authentification

User are able to create accounts and keep their information and messages behind a secure authentification system. A demo user account is also pre-created for anyone who wants to quickly preview the site without having to create their own account.

### Games
Users are able to see the latest game on the market. A very detailed story about the game with screenshots of the game in story mode.

### News
Users are able to read the latest news about that game, wheather the games has a new updates/expansion packs or the latest game hack.

### Post a review
![](https://github.com/kimju-tran/FPS-SquareEnix/blob/master/readme_img/comment.gif)

Users will be able to post a review about the articles. They will be able to update and deleted the reviews upon desired.

### Notification
A component allow users to be notified if there is a news article posted.


## How to Run It
1. First you need to install all the ruby gems by running the following in the terminal:

```
bundle install
```

2. Now you need to install a few node libraries, so make sure you have installed [Node.js](https://nodejs.org/en/download/package-manager) before running the following:

```
npm install
```

3. Create, configure and seed the database running:

```
rails db:setup
rails db:seed
```

4. Run in the terminal:

```
rails s
```

5. In another terminal window run to webpack all files together:

```
npm start
```

Now you will be able to go to `http://localhost:3000` and see the dashboard.

