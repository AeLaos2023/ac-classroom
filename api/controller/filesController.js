const fileModel = require("../models/fileModel");
const resModel = require("../models/responseModel");

const getList = async (req, res, next) => {
  //   console.log(req.body);
  fileModel
    .find(req.body)
    .then((data) => {
      if (data.length <= 0) {
        res.status(200).json(resModel.responseData("03", "Data not found", []));
      } else {
        res.status(200).json(resModel.responseData("00", "Successful", data));
      }
    })
    .catch((err) => {
      res.status(200).json(resModel.responseData("01", err, []));
    });
};

const insertList = async (req, res, next) => {
  //  console.log(req.body);
  var dataList = req.body.data_list;
  var errorCount = 0;
  var errMsg = "";
  fileModel
    .deleteMany({})
    .then((err, data) => {
      for (let i = 0; i < dataList.length; i++) {
        const el = dataList[i];
        fileModel
          .create(el)
          .then((err, data) => {})
          .catch((err) => {
            errMsg = errMsg + err + "; ";
            errorCount++;
          });
      }
      if (errorCount <= 0) {
        res.status(200).json(resModel.responseData("00", "Successful", []));
      } else {
        res.status(200).json(resModel.responseData("01", errMsg, []));
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json(resModel.responseData("01", err, []));
    });
};

module.exports = {
  getList,
  insertList,
};
