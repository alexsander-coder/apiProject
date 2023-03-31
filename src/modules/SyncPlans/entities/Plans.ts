import { Entity, Column, BaseEntity, PrimaryColumn, } from 'typeorm'

@Entity('S_PLANOS_CLUB')
export class Plan extends BaseEntity {
  @PrimaryColumn()
  ID_PLANO_CLUB: number

  @Column({ name: "CD_EXTERNO" })
  cost: number;

  @Column({ name: "NM_NOME" })
  name: string;

  @Column({ name: "DT_INICIO" })
  start: number;

  @Column({ name: "DT_FIM" })
  end: number;

  @Column({ name: "DS_DESCRICAO" })
  cid: string;
}