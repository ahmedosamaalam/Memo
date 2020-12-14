import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-memoir',
  templateUrl: './memoir.component.html',
  styleUrls: ['./memoir.component.scss'],
})
export class MemoirComponent implements OnInit {
  // memories: Array<any>;
  constructor(private route: ActivatedRoute, private app: AppService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.app.getMemoirByDate(params.date).subscribe((res) => {
        console.log(res);
      });
    });
  }
}
