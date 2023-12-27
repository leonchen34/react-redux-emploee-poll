# react-redux-emploee-poll

This is a project for Udacity's React & Redux course.

This application will be used by a company internally to improve collaboration and transparency. 
Every employee can login to the application and create a poll to a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is not possible. Employees can then vote on these solutions and see which solutions have the most votes. In addition, when logged in, a dashboard lists all polls created and answered. 

# To Install

- Download and install all project dependencies with `npm install`

# To run
- start the app with `npm start`

# To test
- start the test with `npm test`

# Data

The `utils/_DATA.js` file represents a fake database and methods that let you access the data. 
There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| password   | String           | The user’s password in order to log in the application |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |
