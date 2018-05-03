import { Reviews } from '../domain';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpGeneric } from './http-generic.service';

@Injectable()
export class ReviewsHttpService extends HttpGeneric<any> {
    //mock db
    // protected endPoint = 'https://809ea74f-a447-4e0b-a845-74177a5243a8.mock.pstmn.io/login';

    //backend server
    protected endPoint = 'http://ec2-34-227-162-95.compute-1.amazonaws.com/suppliers/[userId]/reviews';

    constructor(protected httpClient: HttpClient) {
        super(httpClient);
    }

    public addreview(id: number, item:any) {
      this.endPoint = this.endPoint.replace("[userId]", id.toString());
      return this.update(item);
    }

    public disputereview(id: number, item:any) {
      this.endPoint = this.endPoint.replace("[userId]", id.toString());
      return this.add(item);
    }

    public getReviews(id: number) {
      console.log(id);
      this.endPoint = 'http://ec2-34-227-162-95.compute-1.amazonaws.com/suppliers/' + id + '/reviews';
      console.log(this.endPoint);
      return this.get();
    }

    public deleteReview(id: number, author_id){
      this.endPoint = this.endPoint.replace("[userId]", id.toString());
      return this.delete(author_id);
    }
}