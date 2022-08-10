import { Component } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';


export interface PeriodicElement {
  attribute: string;
  position: number;
  value: number;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, attribute: 'Hydrogen', value: 1.0079, description: 'H'},
  {position: 2, attribute: 'Helium', value: 4.0026, description: 'He'},
  {position: 3, attribute: 'Lithium', value: 6.941, description: 'Li'},
  {position: 4, attribute: 'Beryllium', value: 9.0122, description: 'Be'},
  {position: 5, attribute: 'Boron', value: 10.811, description: 'B'},
  {position: 6, attribute: 'Carbon', value: 12.0107, description: 'C'},
  {position: 7, attribute: 'Nitrogen', value: 14.0067, description: 'N'},
  {position: 8, attribute: 'Oxygen', value: 15.9994, description: 'O'},
  {position: 9, attribute: 'Fluorine', value: 18.9984, description: 'F'},
  {position: 10, attribute: 'Neon', value: 20.1797, description: 'Ne'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['Attribute', 'Value', 'Description'];
  dataToDisplay = [...ELEMENT_DATA];

  dataSource = new ExampleDataSource(this.dataToDisplay);

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}

class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }
}