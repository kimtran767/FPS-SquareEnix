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
![](https://github.com/kimju-tran/FPS-SquareEnix/blob/master/readme_img/login.gif)

```
  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_logged_in
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end

  def logged_in?
    !!current_user    
  end

  def login(user)
    session[:session_token] = user.reset_session_token
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil;
  end
```

User are able to create accounts and keep their information and messages behind a secure authentification system. A demo user account is also pre-created for anyone who wants to quickly preview the site without having to create their own account.

### Games
![](https://github.com/kimju-tran/FPS-SquareEnix/blob/master/readme_img/games.gif)

Users are able to see the latest game on the market. A very detailed story about the game with screenshots of the game in story mode. Also, with a image carousel of the latest uploaded games.

```
  const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      cssEase: "linear"
    };
 
    return (
      <div className='game-index'>
        <div className='game-slide'>
          <Slider {...settings} className='game-slider'>
            {games.map(game => (
              <Link to={`/games/${game.id}`}>
                <img src={game.photoUrls[0]} />
              </Link>
            ))}
          </Slider>

        </div>

        <div className='game-content'>
          {games.map(game => (
            <GameItem game={game} key={game.id} />
          ))}
        </div>
      </div>
    );
```

### News
![](https://github.com/kimju-tran/FPS-SquareEnix/blob/master/readme_img/news.gif)

Users are able to read the latest news about that game, wheather the games has a new updates/expansion packs or the latest game hack.

### Post a review
![](https://github.com/kimju-tran/FPS-SquareEnix/blob/master/readme_img/comment.gif)

Users will be able to post a review about the articles. They will be able to update and deleted the reviews upon desired. A 'Post Comment' will only be display when an user is log in. Comment will not be posted if the comment is blank. User will allow to perform a full CRUD cyle on comments. 

```
    <div className='comment-form'>
        <h2 className='comment-h2'>Comment</h2>
        <form className='inside-comment-form' onSubmit={this.handleSubmit}>
          <h2>{this.renderErrors()}</h2>
          <textarea
            cols='30'
            rows='10'
            className='comment-input'
            type='text'
            placeholder='Join the discussion'
            onChange={this.update("body")}
            value={this.state.body}
            onClick={this.expandForm}
          />
          <br /> <br />
          <input
            className='comment-submit hidden'
            type='submit'
            value={this.props.formType}
          />
        </form>
      </div>
      
 ```

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

