import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class hostel {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  price: number;

  @Column()
  location: string;
}
