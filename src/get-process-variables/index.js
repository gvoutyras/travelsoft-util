/*eslint-disable*/
module.exports = (tdsCon, proccedure, sendAtSign) => {
  let queryCode = `SELECT
      pa.parameter_id AS [order]
      , pa.name AS [name]
      , UPPER(t.name) AS [type]
      , t.max_length AS [length] 
  FROM sys.parameters AS pa 
  INNER JOIN sys.procedures AS p on pa.object_id = p.object_id 
  INNER JOIN sys.types AS t on pa.system_type_id = t.system_type_id AND pa.user_type_id = t.user_type_id
  WHERE p.name = '${proccedure}'`;

  let query = { sql: queryCode };

  return tdsCon
    .request(query)
    .then((resultSet) => {
      if (resultSet[0].length !== 0) {
        if (sendAtSign) return resultSet[0];
        for (let i = 0; i < resultSet[0].length; i++) {
          resultSet[0][i].name = resultSet[0][i].name.substr(1);
        }
        return resultSet[0];
      }
      return false;
    })
    .catch((error) => {
      console.log(`${"[getProcessVariables]".location} Caught Error: ${error}`);
      return false;
    });
};
