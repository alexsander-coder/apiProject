import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity('MVW_BENEFICIARIOS')
export class Beneficio extends BaseEntity {

  @Column({ name: "NOME" })
  nome: string;

  @PrimaryColumn({ name: "CPF" })
  cpf: string;

  @Column({ name: "DATA_NASC" })
  data_nasc: Date;

  @Column({ name: "EMAIL" })
  email: string;

  @Column({ name: "PLANO" })
  plano: string;

  @Column({ name: "VIGENCIA" })
  vigencia: string;

  @PrimaryColumn({ name: "GRUPO" })
  grupo: string;
}