import { Supply } from './supply';

export class Job {
  id: number;
  title: string;
  location: string;
  address?: string;
  cost: number;
  startDate: Date;
  endDate: Date;
  status: string;
  supplies: Supply[];
}
