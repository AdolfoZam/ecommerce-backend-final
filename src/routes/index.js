const authRoutes = require('./auth.routes');
const productsRoutes = require('./products.routes');
const authMiddleware = require('../middlewares/auth.middleware');
const productInCarRoutes = require('./productInCar.routes');
const productInOrderRoutes = require('./productInOrder.routes');
const orderRoutes = require('./order.routes');

const routerApi = ( app ) => {
    app.use('/api/v1/auth', authRoutes);//endpoint de registro
    app.use('/api/v1/products', authMiddleware, productsRoutes);//endpoint de login con jwt
    app.use('/api/v1/products/:id/users', productsRoutes);//endpoint de obtener todos los productos con el usuario
    app.use('/api/v1/products', productsRoutes);//endpoint de crear productos
    app.use('/api/v1/productsInCar', productInCarRoutes);//endpoint de agregar un producto al carrito
    app.use('/api/v1/productsInCar/car', productInCarRoutes);//endpoint para obtener los productos del carrito por usuario
    app.use('/api/v1/productsInOrder', productInOrderRoutes);//endpoint para realizar compra
    app.use('/api/v1/order', orderRoutes)//endpoint para generar orden
};

module.exports = routerApi;


