# The Query Builder Class

You may utilize the **Query Builder Class**. It can be used as follows:

```
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
