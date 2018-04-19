import { Status } from './status';
import { Supply } from './supply';

export class Job {
  id: number;
  title: string;
  location: string;
  cost: number;
  startDate: Date;
  endDate: Date;
  status: Status;
  supplies: Supply[];
}
