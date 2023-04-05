import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entitie";


@Entity()
export class Address {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    state: string

    @Column({ length: 400 })
    cep: string

    @Column({ length: 50 })
    street: string

    @Column({ length: 50 })
    city: string

    @Column({ length: 50 })
    number: string

    @Column({ length: 30, nullable: true })
    complement: string

    @OneToOne(() => User, user => user.address, { onDelete: "CASCADE", eager: true })
    user: User
}