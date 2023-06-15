import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import interact from 'interactjs';


@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.page.html',
  styleUrls: ['./kanban.page.scss'],

})
export class KanbanPage implements OnInit {


  // columns: string[] = ['Etapa1', 'Etapa2', 'Etapa3'];
  // cards: any = {
  //   'Etapa1': ['Seguro 1', 'Seguro 2', 'Seguro 3'],
  //   'Etapa2': ['Seguro 4', 'Seguro 5'],
  //   'Etapa3': ['Seguro 6'],
  // };


  constructor() {
   
  }

  ngOnInit() {

    // this.initializeDraggable();
  }

  // initializeDraggable() {
  //   interact('.draggable')
  //     .draggable({
  //       inertia: true,
  //       modifiers: [
  //         interact.modifiers.restrictRect({
  //           restriction: 'parent',
  //           endOnly: true,
  //         }),
  //       ],
  //       autoScroll: true,
  //       listeners: {
  //         move: this.handleDragMove.bind(this),
  //         end: this.handleDragEnd.bind(this),
  //       },
  //     });
  // }

  // handleDragMove(event: any) {
  //   const target = event.target;
  //   const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  //   const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  //   target.style.transform = `translate(${x}px, ${y}px)`;

  //   target.setAttribute('data-x', x);
  //   target.setAttribute('data-y', y);
  // }

  // handleDragEnd(event: any) {
  //   const target = event.target;
  //   const task = target.textContent.trim();
  //   const originalColumn = this.findColumnByTask(task);
  //   const newColumn = this.findColumnByPosition(event.pageX);

  //   if (originalColumn !== newColumn) {
  //     this.moveTask(task, originalColumn, newColumn);
  //   }

  //   target.style.transform = 'none';
  //   target.setAttribute('data-x', '0');
  //   target.setAttribute('data-y', '0');
  // }

  // findColumnByTask(task: string): string {
  //   for (const column of this.columns) {
  //     if (this.cards[column].includes(task)) {
  //       return column;
  //     }
  //   }
  //   return '';
  // }

  // findColumnByPosition(x: number): string {
  //   const columnWidth = window.innerWidth / this.columns.length;
  //   const columnIndex = Math.floor(x / columnWidth);
  //   return this.columns[columnIndex];
  // }

  // moveTask(task: string, originalColumn: string, newColumn: string) {
  //   const taskIndex = this.cards[originalColumn].indexOf(task);
  //   this.cards[originalColumn].splice(taskIndex, 1);
  //   this.cards[newColumn].push(task);
  // }

  // getCards(column: string) {
  //   return this.cards[column];
  // }
}




