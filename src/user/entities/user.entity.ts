import { Role } from 'src/role/role.enum';
import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: Role.user })
  role: number;

  @BeforeInsert()
  generateId() {
    this.id = Math.floor(Math.random() * 1000);
  }
}
