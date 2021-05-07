[![npm](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/gvoutyras/travelsoft-util/master/package.json&label=npm&query=$.version&color=green&prefix=v)](https://www.npmjs.com/package/travelsoft-util)
[![license](https://img.shields.io/github/license/gvoutyras/travelsoft-util?color=blue)](https://opensource.org/licenses/MIT)

## Install

```
$ npm install @bamblehorse/tiny
```

## Usage

---

```js
const travelUtil = require("travelsoft-util");

console.log(travel.response.success("Succesfull Request", "Yay"));
// {"respStatus":true,"data":"Succesfull Request","message":"Yay"}
```

```js
const express = require("express");
const app = express();
const travelUtil = require("travelsoft-util");

app.get("/cats", (req, res) => {
  res.status(200).json(["Zoe", "Kate"]);
});

app.get("/dogs", (req, res) => {
  res.status(200).json(["Max", "Ralf"]);
});

app.use("/", (req, res) => {
  res.status(200).json(travelUtil.listEndpoints(app));
});

app.listen(3001, () => {
  console.log("listening on *:3000");
});

/*
GET http://localhost:3000 will return:
[
  { path: "/cats", methods: ["GET"] },
  { path: "/dogs", methods: ["GET"] },
]*/
```

```js
let SQLquery = new travelUtil.queryBuilder("procName");
SQLquery.addParameter("param1", "VARCHAR", "value1");
SQLquery.addParameter("param2", "Integer", 2);

console.log(SQLquery.getQuery());

/*
EXEC procName
@param1='value1',
@param2=2
*/
```

## The Query Builder Class

You may utilize the **Query Builder Class**. It can be used as follows:

```js
let qb = new QueryBuilder("testProc");
qb.addParameter("name", global.types.Date, "value");
qb.addParameter("name2", global.types.Int, "value2");

let query = qb.getQuery();
console.log(query);
```

> **Note:** The content of the type variable determines if the value will be sent as a string or not in the query

The above code will produce the following string:

```
EXEC testProc
@name='val',
@name2=val2
```

> **Note:** The `@` symbol must **not** be added in the `addParameter` method
