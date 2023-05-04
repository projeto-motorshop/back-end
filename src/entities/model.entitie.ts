import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "./car.entitie";

@Entity()
export class Model {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 50 })
    name: string

    @OneToOne(() => Car, car => car.model, { onDelete: "CASCADE", eager: true })
    car: Car
}
