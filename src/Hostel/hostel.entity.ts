import { Entity, Column, PrimaryGeneratedColumn, NumericType } from 'typeorm';

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
  price: NumericType;

  @Column()
  location: string;
}
