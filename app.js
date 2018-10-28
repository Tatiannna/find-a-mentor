
const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.static('public'))

app.get('/', (req, res) => 
	res.render("index.html")
);

app.get('/signup', (req, res) => 
	res.render("index.html")
);
app.get('/login', (req, res) => 
	res.render("index.html")
);


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

var Sequelize = require('sequelize');

var connection = new Sequelize('postgres', 'postgres','password',{ dialect: 'postgres'});

var User = connection.define('user',{
	firstname: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	lastname: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		primaryKey: true,
		unique: true,
		validate: {
			isEmail: true
		}
	},
	courses: {
		type: Sequelize.STRING,
	},
	bio: {
		type: Sequelize.TEXT
	},
	langproficiency: {
		type: Sequelize.STRING,
	},
	ismentor:{
		type: Sequelize.BOOLEAN,
		defaultValue: false
	}

});

connection.sync();
//.then(function (){
// 	User.create({
// 		username: 'sangria',
// 		password: 'wine',
// 		email: 'email@email.com',
// 		interest: 'computer science'
// 	});
	
// });


