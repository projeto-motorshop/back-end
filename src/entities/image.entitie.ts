import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "./car.entitie";


@Entity()
export class Image {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 400 })
    urlImg: string

    @ManyToOne(() => Car, car => car.images, { onDelete: "CASCADE", eager: true })
    car: Car


}