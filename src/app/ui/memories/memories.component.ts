import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Memoir } from 'src/app/models/memoir';
import { CreateMemoirComponent } from '../create-memoir/create-memoir.component';

interface GroupByData {
  [key: string]: Array<any>;
}

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.scss'],
})
export class MemoriesComponent implements OnInit {
  memories: GroupByData = {};
  constructor(public dialog: MatDialog, private app: AppService) {}
  ngOnInit(): void {
    this.app.getMemories().subscribe((res) => {
      this.memories = this.groupBy(res, 'timeStamp');
      console.log(this.memories);
    });
  }

  addNote() {
    let dialogRef = this.dialog.open(CreateMemoirComponent, {
      width: '40%',
      autoFocus: false,
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`); // Pizza!
    // });
    // dialogRef.close('Pizza!');
  }

  groupBy(items: Array<any>, key: string): GroupByData {
    return items.reduce((prev, curr) => {
      return {
        ...prev,
        [curr[key]]: [...(prev[curr[key]] || []), { ...curr }],
      };
    }, {});
  }

  download(item: any) {
    this.app.exportJSON({ item });
  }
}
