import "dotenv/config"
import { DataSource } from "typeorm"
import { Address } from "./entities/address.entitie"
import { Car } from "./entities/car.entitie"
import { Comments } from "./entities/comments.entitie"
import { Image } from "./entities/image.entitie"
import { User } from "./entities/user.entitie"
import { addEntities1680708935766 } from "./migrations/1680708935766-addEntities"

const AppDataSource = new DataSource(
    process.env.NODE_ENV === "test" ?
        {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: ["src/entities/*.ts"]
        } :
        {
            type: "postgres",
            host: process.env.PGHOST,
            port: parseInt(process.env.PGPORT!),
            username: process.env.PGUSER,
            password: process.env.PGPASSWORD,
            database: process.env.PGDATABASE,
            logging: true,
            synchronize: false,
            entities: [Address, Car, Image, User, Comments],
            migrations: [addEntities1680708935766]
        }
)

export default AppDataSource