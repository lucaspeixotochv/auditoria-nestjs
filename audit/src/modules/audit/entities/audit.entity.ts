import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Audit {
  @PrimaryColumn('uuid', { generated: 'uuid' })
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  reference: string;

  @Column()
  method: string;

  @Column({ type: 'json' })
  old?: any;

  @Column({ type: 'json' })
  new: any;
}
