import { IState } from './../../../shared/models/istate';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  private stateSubject = new BehaviorSubject<IState[]>([]);

  constructor() {
    this.insertStates();
  }

  private insertStates() {
    this.stateSubject.next(this.createStates());
  }

  getByUf(uf: string): Observable<IState> {
    return this.stateSubject.pipe(
      take(1),
      map((states: IState[]) => states.filter(c => c.uf == uf)[0])
    );
  }

  returnStates(): Observable<IState[]> {
    return this.stateSubject.asObservable();
  }

  createStates(): IState[] {
    let states: IState[];
    return states = [
      {id:1, uf:"AC", name:"Acre"},
      {id:2, uf:"AL", name:"Alagoas"},
      {id:3, uf:"AP", name:"Amapá"},
      {id:4, uf:"AM", name:"Amazonas"},
      {id:5, uf:"BA", name:"Bahia"},
      {id:6, uf:"CE", name:"Ceará"},
      {id:7, uf:"DF", name:"Distrito Federal"},
      {id:8, uf:"ES", name:"Espírito Santo"},
      {id:9, uf:"GO", name:"Goiás"},
      {id:10, uf:"MA", name:"Maranhão"},
      {id:11, uf:"MT", name:"Mato Grosso"},
      {id:12, uf:"MS", name:"Mato Grosso do Sul"},
      {id:13, uf:"MG", name:"Minas Gerais"},
      {id:14, uf:"PA", name:"Pará"},
      {id:15, uf:"PB", name:"Paraíba"},
      {id:16, uf:"PR", name:"Paraná"},
      {id:17, uf:"PE", name:"Pernambuco"},
      {id:18, uf:"PI", name:"Piauí"},
      {id:19, uf:"RJ", name:"Rio de Janeiro"},
      {id:20, uf:"RN", name:"Rio Grande do Norte"},
      {id:21, uf:"RS", name:"Rio Grande do Sul"},
      {id:22, uf:"RO", name:"Rondônia"},
      {id:23, uf:"RR", name:"Roraima"},
      {id:24, uf:"SC", name:"Santa Catarina"},
      {id:25, uf:"SP", name:"São Paulo"},
      {id:26, uf:"SE", name:"Sergipe"},
      {id:27, uf:"TO", name:"Tocantins"}
    ];
  }
}
