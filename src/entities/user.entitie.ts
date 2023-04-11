import { hashSync } from "bcryptjs";
import { Exclude } from "class-transformer";
import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Address } from "./address.entitie";
import { Car } from "./car.entitie";
import { Comments } from "./comments.entitie";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 400, nullable: true })
    urlImg: string;

    @Column({ unique: true })
    email: string;

    @Column()
    @Exclude()
    password: string;

    @Column({ default: false })
    isAdm: boolean;

    @Column({ default: true })
    salesman: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @Column({ length: 400, nullable: true })
    description: string;

    @Column()
    birthdate: Date;

    @Column({ length: 20 })
    phone: string;

    @Column({ length: 20 })
    cpf: string;

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10);
    }

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;

    @OneToMany(() => Car, (cars) => cars.user)
    cars: Car[];

    @OneToMany(() => Comments, (comment) => comment.user)
    comments: Comments[];
}
