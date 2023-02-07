const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    apis: ["./src/routes/auth.routes.js", "./src/models/users.js",
     "./src/routes/products.routes.js", "./src/models/product.js", 
     "./src/routes/productInCar.routes.js","./src/models/productInCar.js",
    ],
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Ecommerce en node js",
            version: "0.0.1",
            description: "API para pagina de comercio on-line"
        },
    },
};
//vamos a generar una especiaficacion en json para nuestra documentacion
const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    //genera la ruta donde se mostrara la documentacion
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get("/api/v1/docs.json", (req, res) => {
        res.setHeader({"Content-Type": "application/json"});
        res.send(swaggerSpec);
    });
    console.log(`La documentacion esta disponible en ${process.env.URL}:${port}/api/v1/docs`);
};

module.exports = swaggerDocs;