import { Supplier } from './supplier';
export class Supply {
  id: number;
  name: string;
  cost?:number;
  supplierId?: number;
  supplier?: Supplier;
  date?: Date;
}
