import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newTask: string;
  ListTask: Array<string> = [];
  ListDone: Array<string> = [];

  add() {
    this.ListTask.push(this.newTask);
    this.newTask = '';
    console.log(this.ListTask);
  }

  remove(task: string) {
    this.ListTask = this.ListTask.filter(e => e !== task);
  }

  done(task) {
    this.ListDone.push(task);
    this.remove(task);
    console.log(this.ListTask);


  }

}
