export default {
  'POST  /api/basicForm': (_, res) => {
    res.send({
      data: {
        message: `ok ${new Date()}`,
      },
    });
  },
  'POST  /api/product': (_, res) => {
    res.send({
      data: {
        message: `ok ${new Date()}`,
      },
    });
  }
};



