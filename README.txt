Khaliq Keyes 480 Final 

git clone https://github.com/KhaLeak/Bank-Using-MySql-COSC480.git

Required packages
Following packages have been used in bank web app:
 To install type the following commands into terminal
	- npm install express
	- npm install body-parser
	- npm install express-xml-bodyparser
	- npm install mongoose
	- npm install helmet-csp
	- npm install xss-filters
	- npm install password-validator
	- npm install mysql
	- npm install bcrypt
	- npm install https
	- npm install sequalize
Navigate to app.js line 52 and change sql connections according to your localhost
Then navigate to createdb.sql file change user and password and paste into mysql workbench or any mysql editor


To run type the following command in a terminal:
$ node app.js
Then type "https://localhost:3000" in your browser's address bar.


Frontend:
The web app contains four pages.
	1- index
	2- signup
	3- login
	4- profile

1- /index: This page contains two links to /signup and /login.

2- /signup: This page asks for user information. username, password and address. All inputs to browser are santatized using DOMpurify. /signup uses /signup.js and /purify.min.js javascripts. /signup.js contain a javascript code that communicate with server with XML. after registering user will be redirected to /login.

3- /login: Login asks for username and password. if user inputs wrong username or password a message will appear on the browser. user with correct credential will redirect to /profile.

4- /profile: Shows all accounts that belong to the logged in user. 4 type of actions are possible for the user. add new account, deposit, withdraw and transfer money between a user accounts. When page loads a function in javascript file /profile.js named load() is called. load() connects to web app and asks for user's account info. It will show all accounts and balances in a table. Each of 4 actions in /profile contain two javascript function. the first four are addAcc(), deposit(), withdraw() and transfer(). Running each of these functions add more control to the page. By activating each function a secondary function will be activated. Secondary functions related to each first four are create(), sendmoney(), getmoney() and exchange() respectively. The later four will communicate with web app using XML. All recieved data are sanitize using DOMPurify package.


Password validation: User passwords are validated to meet OWASP requirments using password-validator package.

Backend:

In backend Nodejs express is used to handle the requests. all GET requests are handled by sending the requested file. All POST request data are first processed with body-parser and express-XML-bodyparser. 
Registered users can use /login to sign in. username and password is checked against mysql data base. If credentials are valid, a session will be created and user will be redirected to /profile.

Sequalize:
Sequelize simplifies the process of working with relational databases in Node.js applications, making database interactions more intuitive and efficient.

Database:
mysql database is used. Database contains two tables. First one is users that holds user informations. Second one is accounts that holds account informations.

CSP:
CSP-helmet is used to restricte script to the local website domain. all script need to be downloaded directly from the website.

Session:
client session package is used to manage sessions. session will expire after 3 minutes of inactivity or 30 minutes. sessions are stored with cookie on client browser. httpOnly is also set to protect cookie. each request to /profile , /addaccount , /deposit , /withdraw , transfer are first checked for session variables.

xss-filters:
All incoming data through post requests are first processed to remove xss tags and protection against XSS.

https:
All communications are done with https.
