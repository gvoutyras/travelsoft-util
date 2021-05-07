const list = require("./src/list-endpoints");
const response = require("./src/response-handlers");
const variable_val = require("./src/variable-validator");
const query = require("./src/query-builder");
const getVars = require("./src/get-process-variables");

module.exports = {
  listEndpoints: list,
  response: response,
  variableValidator: variable_val,
  queryBuilder: query,
  getProcessVariables: getVars,
};
