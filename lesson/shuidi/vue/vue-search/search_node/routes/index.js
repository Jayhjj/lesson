const searchRouter = ('./serch.js');
module.exports = (app) => {
    app.use('/search', searchRouter);
}