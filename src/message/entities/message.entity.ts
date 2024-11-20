import {Column,Entity,ManyToOne,PrimaryGeneratedColumn} from 'typeorm';
//import { user } from 'src/user/entities/user.entity';
@Entity()
export class message {
    @PrimaryGeneratedColumn('uuid')
    messageId:string
    @Column()
    message:string
    @Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP'})
    SentAt:Date;
  //  @ManyToOne(()=>user,(user)=>user.messages,{eager:true})
    //user:user

}

