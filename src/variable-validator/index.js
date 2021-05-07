/**
 * Itterates all of the giver variabels and returns true if
 * all of them have values. Otherwise it returns false and
 * an array with the variables that are undefined.
 * @param {*} data Variables from the request body
 * @param {*} skip Variabels that are not required to have a value
 * @returns An object with status set to True or False and an array with the bad variables.
 */
module.exports = (data, skip) => {
  // array that stores the missing variables
  // to send in the response
  let missingVars = [];
  let skipVariables;

  if (skip == null || skip === undefined || !skip) {
    // array that contains the variabel names
    // that we don not want to check if they
    // are initialized
    skipVariables = [];
  } else skipVariables = skip;

  for (let key in data) {
    let varName = key;
    let value = data[key];

    if (!skipVariables.includes(varName)) {
      if ((!value || value === undefined) && value !== 0) {
        console.log("undefined");
        console.log(varName);
        missingVars.push(varName);
      }
    }
  }

  if (missingVars.length !== 0) {
    return { status: false, data: missingVars };
  }
  return { status: true };
};
