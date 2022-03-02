import 'dotenv/config';

export const config = {
    port: process.env.PORT || 3000,
    databaseHost: process.env.DATABASE_HOST,
    databaseName: process.env.DATABASE_NAME,
    databasePort: process.env.DATABASE_PORT || 27017,
    databaseUser: process.env.DATABASE_USER,
    databasePassword: process.env.DATABASE_PASSWORD,
}