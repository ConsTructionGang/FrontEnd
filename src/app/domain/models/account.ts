import { Reviews } from './reviews';
import { Job } from './job';

export class Account {
  id?: number;
  password?: string;
  type: string;
  email?: string;
  name?: string;
  supply?: string;
  review?: Reviews[];
  jobs?: Job[];
}
