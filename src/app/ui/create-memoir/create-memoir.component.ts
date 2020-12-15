import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { Memoir } from 'src/app/models/memoir';

@Component({
  selector: 'app-create-memoir',
  templateUrl: './create-memoir.component.html',
  styleUrls: ['./create-memoir.component.scss'],
})
export class CreateMemoirComponent implements OnInit {
  memoirForm: any;
  img: any;
  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    public dialogRef: MatDialogRef<CreateMemoirComponent>
  ) {}

  ngOnInit(): void {
    this.registerForm();
  }
  registerForm() {
    this.memoirForm = this.fb.group({
      note: ['', Validators['required']],
      timeStamp: ['', Validators['required']],
      picture: ['', Validators['required']],
      embedUrl: ['', Validators['required']],
    });
  }

  async onChange(event: Event | any) {
    const file = await this.appService.encodeImageFileAsURL(event.target);
    this.memoirForm.controls['picture'].setValue(file);
  }

  onSubmit() {
    const payload = {
      ...this.memoirForm.value,
      timeStamp: new Date(this.memoirForm.value.timeStamp).toLocaleDateString(
        'en-US'
      ),
    };
    this.appService.createNote(payload).subscribe((res) => {
      this.dialogRef.close(res);
    });
  }
}
