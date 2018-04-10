import indexRouter from './indexRouter';
import blockchainRouter from './blockchainRouter';
import minerRouter from './minerRouter';
import nodeRouter from './nodeRouter';
import operatorRouter from './operatorRouter';


const initRoutes = app => {
    app.use('/', indexRouter);

    app.use('/blockchain', blockchainRouter);
    app.use('/miner', minerRouter);
    app.use('/node', nodeRouter);
    app.use('/operator', operatorRouter);
}

export default initRoutes;