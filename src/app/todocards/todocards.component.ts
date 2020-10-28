import { Component, OnInit } from '@angular/core';
import { ScrumcardsService } from '../scrumcards.service';
import { Card } from '../models/card';


//if i split up each card as an instanced component, that would be terribly inefficient
//with something so simple, i'll just handle card logic all in a single component

@Component({
  selector: 'app-todocards',
  templateUrl: './todocards.component.html',
  styleUrls: ['./todocards.component.css']
})
export class TodocardsComponent implements OnInit {
  private backlog:Card[];
  private sprint:Card[];
  private todo:Card[];
  private doing:Card[];
  private verify:Card[];
  private done:Card[];

  constructor(private cardserv: ScrumcardsService) {  }

  ngOnInit(): void {
  }

  addCard(){
    
  }

  updateCard(){

  }

  deleteCard(){

  }

  moveCard(){

  }




}
