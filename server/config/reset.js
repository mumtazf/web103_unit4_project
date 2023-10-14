import pool from './database.js'
import carsData from '../data/cars.js'

const createCarTable = async() => {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS cars (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        type TEXT NOT NULL,
        price VARCHAR(255) NOT NULL,
        convertible boolean NOT NULL
    )`

    try{
        const res = await pool.query(createTableQuery)
    }catch(err){
        console.log("Error creating the table",err);
    }   
}

const seedCarsTable = async () => {
    await createCarTable()

    carsData.forEach((item) => {
        const insertQuery = {
            text: 'INSERT INTO cars (name, type, price, convertible) VALUES ($1, $2, $3, $4) '
        }
    

    const values = [
        item.name,
        item.type,
        item.price,
        item.convertible
    ]
    
    pool.query(insertQuery, values, (err, res) => {
        if(err){
            console.error("⚠️ error inserting item", err)
            return;
        }
        console.log(`${item.name} added successfully`)
    })
    })
}

seedCarsTable()