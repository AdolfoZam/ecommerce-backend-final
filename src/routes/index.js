const authRoutes = require('./auth.routes');
const productsRoutes = require('./products.routes');
const authMiddleware = require('../middlewares/auth.middleware');
const productInCarRoutes = require('./productInCar.routes');

const routerApi = ( app ) => {
    app.use('/api/v1/auth', authRoutes);
    app.use('/api/v1/products', authMiddleware, productsRoutes);
    app.use('/api/v1/products/:id/users', productsRoutes);
    app.use('/api/v1/products', productsRoutes);
    app.use('/api/v1/productsInCar', productInCarRoutes);
};

module.exports = routerApi;


