import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("specification")
class Specification {
  @PrimaryColumn()
  id?: string;
  
  @CreateDateColumn()
  created_at: Date;
  
  @Column()
  name: string;

  @Column()
  description: string;

  constructor(props: Omit<Specification, "created_at">) {
    Object.assign(this, {
      ...props,
      created_at: new Date(),
    });
    if (!this.id) {
      this.id = uuidV4();
    } else {
      this.id = props.id;
    }
  }
}

export { Specification };
