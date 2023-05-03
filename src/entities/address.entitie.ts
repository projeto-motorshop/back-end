import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    state: string;

    @Column({ length: 50 })
    cep: string;

    @Column({ length: 50 })
    street: string;

    @Column({ length: 50 })
    city: string;

    @Column({ length: 50 })
    number: string;

    @Column({ length: 30, nullable: true })
    complement: string;
}
