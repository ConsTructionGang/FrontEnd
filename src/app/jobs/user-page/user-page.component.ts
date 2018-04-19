import { Component, OnInit } from '@angular/core';
import { Supply, Account} from '../../domain/index'


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  public user:Account;

  constructor() { }

  ngOnInit() {
    this.user={
      id:59348,
      email: "example@mail.com",
      password: "password",
      type:"User",
      name:"Bob the Builder",
      jobs:[
        {
          id: 11,
          title: "Expressway Tower",
          location: "North Central Expressway",
          cost :100000,
          startDate: new Date(2017,11,12),
          endDate: new Date(2018,2,4),
          status: {
            statusId: 0, statusString: "In Progress"
          },
          supplies:[{id: 1, name: 'bricks', supplier: null},
        {id: 2, name: 'wood', supplier: null}]
        },
        {
          id: 12,
          title: "Ulta",
          location: "Mockingbird Lane",
          cost :250000,
          startDate: new Date(2018,8,8),
          endDate: new Date(2020,3,24),
          status: {
            statusId: 0, statusString: "In Progress"
          },
          supplies:[{id: 1, name: 'bricks', supplier:null},
        {id: 2, name: 'wood', supplier:null}]
        },
        {
          id: 13,
          title: "Elizabeth's Cakes",
          location: "Preston",
          cost :50000,
          startDate: new Date(2018,5,4),
          endDate: new Date(2019,1,13),
          status: {
            statusId: 0, statusString: "In Progress"
          },
          supplies:[{id: 1, name: 'bricks', supplier:null},
        {id: 2, name: 'wood', supplier:null}],
        }
      ],
      tasks:[
        {
          title:'Buy Wood',
          description: 'Buy cedar wood for under $100',
          status: false,
          startDate: new Date(2018,5,4),
          endDate: new Date(2019,1,13),
        },
        {
          title:'Make Sandwich',
          description: 'Make PB&J sandwich',
          status: true,
          startDate: new Date(2018,5,4),
          endDate: new Date(2019,1,13),
        },
        {
          title:'Eat Lunch',
          description: 'Eat awesome PB&J sandwich',
          status: false,
          startDate: new Date(2018,5,4),
          endDate: new Date(2019,1,13),
        }
      ]
    }
  }

}
