import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category";

@Entity()
export class Task {
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column()
    name: string
    @Column()
    isDone: boolean
    @ManyToOne(() => Category, (category) => category.tasks)
    category: Category
}