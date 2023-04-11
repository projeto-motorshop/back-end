import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "./car.entitie";

@Entity()
export class Brand {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 50 })
    name: string

    @OneToOne(() => Car, car => car.brand, { onDelete: "CASCADE", eager: true })
    car: Car


}