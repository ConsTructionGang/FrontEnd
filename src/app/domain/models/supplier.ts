import {Supply} from './supply'
export class Supplier {
  id: number;
  name: string;
  supplies?: Supply[];
  cost?:number;
  rating?:number;
}
