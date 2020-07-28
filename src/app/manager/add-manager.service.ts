import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';

import { Manager } from './manager.module';

@Injectable({
  providedIn: 'root'
})
export class AddManagerService {

  managers: Manager[] = [{
    managername: 'Rose Kairu',
    managerusername: 'rosekairu20',
    manageremail: 'rosekairu@gmail.com'
  },
  {
    managername: 'Wanjiku Karanja',
    managerusername: 'wanjikukaranja20',
    manageremail: 'ciiku92@gmail.com'
  },
  {
    managername: 'Collin Owino',
    managerusername: 'collinowino20',
    manageremail: 'collinowino@gmail.com'
  }];

  constructor() { }

  public getManagers(): any{
    const managersObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.managers);
      },1000);
    });

    return managersObservable;
  }
}
