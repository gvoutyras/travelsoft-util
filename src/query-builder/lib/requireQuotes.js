const tedious = require("tedious");
const t = tedious.TYPES;

module.exports = (type) => {
  if (
    type === t.Date ||
    type === t.Time ||
    type === t.DateTime ||
    type === t.DateTime2 ||
    type === t.DateTimeOffset ||
    type === t.SmallDateTime ||
    type === t.Char ||
    type === t.VarChar ||
    type === t.NChar ||
    type === t.NVarChar ||
    type === t.NText ||
    type === t.Xml ||
    type === "DATE" ||
    type === "TIME" ||
    type === "DATETIME" ||
    type === "DATETIME2" ||
    type === "DATETIMEOFFSET" ||
    type === "SMALLDATETIME" ||
    type === "CHAR" ||
    type === "VARCHAR" ||
    type === "NCHAR" ||
    type === "NVARCHAR" ||
    type === "NTEXT" ||
    type === "LONGVARCHAR" ||
    type === "XML"
  ) {
    return true;
  }
  return false;
};
