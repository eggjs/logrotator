module.exports = app => {
  app.get('/', async function () {
    this.body = 123;
  });
};
