var express = require("express")
const router = require('./controller/router.js')
var app = express()



// Server port
var HTTP_PORT = 8000 

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

// Insert here other API endpoints
app.use('/', router);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});