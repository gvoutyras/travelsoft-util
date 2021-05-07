const listEndpoints = require("express-list-endpoints");
const _ = require("lodash");

module.exports = (app) => {
  let list = listEndpoints(app);

  let result = _.transform(list, (element, value, key) => {
    // eslint-disable-next-line no-param-reassign
    element[key] = _.omit(value, "middleware");
  });

  return result;
};
