import { Reviews } from './reviews';

export class Account {
  id: number;
  password: string;
  type: string;
  email?: string;
  name?: string;
  supply?: string;
  review?: Reviews;
}
