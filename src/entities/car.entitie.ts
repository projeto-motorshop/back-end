import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Comments } from "./comments.entitie";
import { Image } from "./image.entitie";
import { User } from "./user.entitie";

@Entity()
export class Car {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    brand: string;

    @Column({ length: 400 })
    frontImg: string;

    @Column({ length: 50 })
    model: string;

    @Column({ length: 50 })
    fuel: string;

    @Column()
    year: string;

    @Column({ length: 30 })
    mileage: string;

    @Column({ length: 500 })
    description: string;

    @Column()
    price: string;

    @Column()
    priceFipe: string;

    @Column({ length: 20 })
    color: string;

    @Column({ default: false })
    goodDeal: boolean;

    @Column({ default: true })
    isPublished: boolean;

    @ManyToOne(() => User, (user) => user.cars, {
        onDelete: "CASCADE",
        eager: true,
    })
    user: User;

    @OneToMany(() => Image, (images) => images.car)
    images: Image[];

    @OneToMany(() => Comments, (comments) => comments.car)
    comments: Comments[];
}
