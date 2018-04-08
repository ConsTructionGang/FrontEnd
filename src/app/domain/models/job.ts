import { Status } from './status';
export class Job {
  id: number;
  title: string;
  location: string;
  cost: number;
  startDate: Date;
  endDate: Date;
  status: Status;
}
