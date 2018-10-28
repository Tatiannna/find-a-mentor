
const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.static('public'))

app.get('/', (req, res) => 
	res.render("index.html")
);

app.get('/signup', (req, res) => 
	res.render("signup.html")
);
app.get('/login', (req, res) => 
	res.render("login.html")
);


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));



