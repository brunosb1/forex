import app from './server'
import dotenv from 'dotenv'

dotenv.config();

app.listen(process.env.PORT, () =>
console.log(`Listening on port ${process.env.PORT}`)
);