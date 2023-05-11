const { postProductModel } = require("../../models/productsModel");
const postProductController = async (req, res) => {
  const body = req.body;
  try {
    const data = await postProductModel({ body })
    res.send(data)
  }
  catch (err) {
    res.data(err)
  }

}

module.exports = { postProductController };