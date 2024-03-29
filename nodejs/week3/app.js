const knex = require("knex")({
    client: "mysql2",
    connection: {
        host: process.env.DB_HOST || "127.0.0.1",
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "123456",
        database: process.env.DB_NAME || "hyf_node_week3_warmup",
        multipleStatements: true,
    },
})

const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const apiRouter = express.Router()
app.use("/api", apiRouter)

const contactsAPIRouter = express.Router()
apiRouter.use("/contacts", contactsAPIRouter)

contactsAPIRouter.get("/", async (req, res) => {
    let query = knex.select("*").from("contacts")
    // route localhost:3000/api/contacts?sort=first_name; DROP/DELETE TABLE contacts 
    // it will drop/delete the table contacts 
    // protect this injection vulnerbility with named parameters like below 
    const sortby = new Set(['id', 'first_name', 'last_name', 'email', 'phone'])
    if ("sort" in req.query && sortby.has(req.query.sort)) {
        const orderBy = req.query.sort.toString()
        if (orderBy.length > 0) {
            query = query.orderByRaw(orderBy)
        }
    }

    console.log("SQL", query.toSQL().sql)

    try {
        const data = await query
        res.json({ data })
    } catch (e) {
        console.error(e)
        res.status(500).json({ error: "Internal server error" })
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
