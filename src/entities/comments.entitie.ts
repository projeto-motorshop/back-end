import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Car } from "./car.entitie";
import { User } from "./user.entitie";


@Entity()
export class Comments {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 50 })
    description: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => User, user => user.comments, { onDelete: "CASCADE", eager: true })
    user: User

    @ManyToOne(() => Car, car => car.comments, { onDelete: "CASCADE", eager: true })
    car: Car
}