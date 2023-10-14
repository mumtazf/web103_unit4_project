import pg from 'pg'

const config = {
    user: "postgres",
    password: "iW9rtHyHWlnENPC0fEKW",
    host: "containers-us-west-112.railway.app",
    port: "6986",
    database: "railway"
}

 const pool = new pg.Pool(config)
 export default pool
