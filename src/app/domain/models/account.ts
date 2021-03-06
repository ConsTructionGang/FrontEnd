import { Reviews } from './reviews';
import { Job } from './job';
import { Task } from './task';
import { Supply } from './supply';

export class Account {
  id?: number;
  password?: string;
  type: string;
  email?: string;
  city?: string;
  state?: string;
  address?: string;
  name?: string;
  supply?: Supply[];
  companyname?: string;
  review?: Reviews[];
  jobs?: Job[];
  tasks?: Task[];
  phonenumber?: number;
  website?:string;
  description?:string;
  rating?:number;
}
