//Install express server
const express =require('express');

const path = require('path');

const app = express();

//server only the static files form the dist directory

//replace the '/dist/<yo_your_prohect_name'

app.use(express.static(_dirname + '/dist/<to_your_proyect_name>'));

app.get('*', function(req, res){
  //replace the '/dist/<to_your_proyect_name>/index.html'

  res.sendFile(path.join(__dirname + '/dist/<to_your_proyect_name>/index.html'));
});
//Start the app by listening on the default Heroku port

app.listen(process.env.PORT || 8080);
