import { Injectable } from '@angular/core';
import { Task } from './Task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTasks(): Task[] {
    return [new Task('Zrobić zakupy', true, 'dom'),
    new Task('Posprzątać', true, 'dom'),
    new Task('Projekt z Angulara', false, 'praca'),
    new Task('Przebiec 10km', false, 'wypoczynek')];
  }
}
