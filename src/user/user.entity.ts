import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class user {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstname: string;
  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;
  @Column()
  confirmpassword: string
  @Column()
  role:string
}
