import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Supply, Account } from '../../domain';
import { UserpageHttpService } from '../../domain';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  public user: Account;

  constructor(
    public userpageRepository: UserpageHttpService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // get user information
    this.activatedRoute.params.subscribe((params: any) => {
      this.userpageRepository.getById(+params.userId).subscribe(resp => {
        if (resp.status == 200) {
          for (let i = 0; i < resp.body.jobs.length; ++i) {
            if (resp.body.jobs[i].start_date)
              resp.body.jobs[i].startDate = new Date(resp.body.jobs[i].start_date);

            if (resp.body.jobs[i].end_date)
              resp.body.jobs[i].endDate = new Date(resp.body.jobs[i].end_date);
          }

          for (let i = 0; i < resp.body.tasks.length; ++i) {
            resp.body.tasks[i].title = resp.body.tasks[i].Name;
            resp.body.tasks[i].description = resp.body.tasks[i].Description;
            
            resp.body.tasks[i].status = false; // must be changed

            if (resp.body.tasks[i].Creation_Date)
              resp.body.tasks[i].startDate = new Date(resp.body.tasks[i].Creation_Date);

            if (resp.body.tasks[i].Estimate_Date)
              resp.body.tasks[i].endDate = new Date(resp.body.tasks[i].Estimate_Date);
          }

          console.log(resp.body);

          this.user = resp.body;
        }
      });
    });

  }

}
