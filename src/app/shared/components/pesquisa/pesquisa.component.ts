import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {

  @Output() OnTyping = new EventEmitter<string>();
  @Output() page = new EventEmitter<number>();
  @Input() value = '';
  debounce: Subject<string> = new Subject<string>();

  ngOnInit(): void {
      this.debounce.pipe(debounceTime(300)).subscribe(filter => { this.OnTyping.emit(filter); this.page.emit(1); });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
      this.debounce.unsubscribe();
  }
}
