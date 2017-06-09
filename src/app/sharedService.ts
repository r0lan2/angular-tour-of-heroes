import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Hero } from './hero';
@Injectable()
export class SharedService {

  currentItem: Hero;
  deleteEvent: DeletedItemEventEmitter;
  storeEvent: StoreItemEventEmitter;
  crudActionResultEvent: CrudActionResultEventEmitter;

 constructor() {
       this.deleteEvent = new DeletedItemEventEmitter();
       this.storeEvent = new StoreItemEventEmitter();
       this.crudActionResultEvent = new CrudActionResultEventEmitter();
   }
}


export class DeletedItemEventEmitter extends Subject<Hero> {
    constructor() {
        super();
    }
    emit(value) { super.next(value); }
}

export class StoreItemEventEmitter extends Subject<Hero> {
    constructor() {
        super();
    }
    emit(value) { super.next(value); }
}

export class CrudActionResultEventEmitter extends Subject<Hero> {
    constructor() {
        super();
    }
    emit(value) { super.next(value); }
}

