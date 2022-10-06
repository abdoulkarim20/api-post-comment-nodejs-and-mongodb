const express = require("express");
const app = express();
require('./models/dbConfig.js');
const cors = require("cors");
const postsRoutes = require("./routes/postsController");
const bodyParser = require("body-parser");
/*Swgeer*/
const swaggerUi = require('swagger-ui-express');
const swaggerDocumentation = require('./docs');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocumentation));
app.use(bodyParser.json());/*le middlewere qui permet de transformer les donnees sous format json soit du req ou res*/

app.use(cors())/*Permet d'autoriser tous les lien a utiliser cet api*/
// app.use({origin:'url que nous voulons que il accede a notre api'}) /*Permet de restreindre l'accees a l'api*/

/*Middlewere qui va ecouter chaque changement du reponse du req ou res*/
app.use('/posts', postsRoutes);





/*server colbact*/
app.listen(5000, () => console.log(`Server started to port : ${5000}`));