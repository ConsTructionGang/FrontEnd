import { Reviews } from './reviews';
import { Job } from './job';
import { Task } from './task';

export class Account {
  id?: number;
  password?: string;
  type: string;
  email?: string;
  name?: string;
  supply?: string;
  companyname?: string;
  review?: Reviews[];
  jobs?: Job[];
  tasks?: Task[];
}
