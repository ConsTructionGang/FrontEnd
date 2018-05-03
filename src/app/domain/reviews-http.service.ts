import { Reviews } from '../domain';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpGeneric } from './http-generic.service';

@Injectable()
export class ReviewsHttpService extends HttpGeneric<any> {

  protected endPoint = 'http://ec2-34-227-162-95.compute-1.amazonaws.com/suppliers/[userId]/reviews';

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  public addreview(id: number, item: any) {
    this.endPoint = this.endPoint.replace("[userId]", id.toString());
    return this.update(item);
  }

  public disputereview(id: number, item: any) {
    this.endPoint = this.endPoint.replace("[userId]", id.toString());
    return this.add(item);
  }

  public getReviews(id: number) {
    this.endPoint = this.endPoint.replace("[userId]", id.toString());
    return this.get();
  }

  public deleteReview(id: number, author_id) {
    this.endPoint = this.endPoint.replace("[userId]", id.toString());
    return this.delete(author_id);
  }
}