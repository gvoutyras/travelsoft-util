const quotes = require("./lib/requireQuotes");

class QueryBuilder {
  constructor(procName) {
    this.query = `EXEC ${procName}`;
    this.firstParam = true;
  }

  addParameter(paramName, type, paramValue) {
    if (this.firstParam) {
      this.query += `\n@${paramName}=`;
      this.firstParam = false;
    } else {
      this.query += `,\n@${paramName}=`;
    }

    if (quotes(type)) {
      this.query += `'${paramValue}'`;
    } else {
      this.query += `${paramValue}`;
    }
  }

  getQuery() {
    return this.query;
  }
}

module.exports = QueryBuilder;
