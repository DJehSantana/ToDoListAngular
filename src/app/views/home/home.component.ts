import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/helpers/enums/statusEnum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  toDo: string;
  doing: string;
  pending: string;
  done: string;

  ngOnInit(): void {
    this.toDo = Status.TODO;
    this.doing = Status.DOING;
    this.pending = Status.PENDING;
    this.done = Status.DONE;


  }

}
