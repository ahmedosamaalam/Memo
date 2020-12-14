import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Memoir } from './models/memoir';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  memories: Memoir[] = [];

  constructor() {
    this.memories = JSON.parse(localStorage.getItem('memories') as any) || [];
  }

  getMemories() {
    const memories = JSON.parse(localStorage.getItem('memories') as any) || [];
    return of(memories);
  }

  getMemoirByDate(date: any) {
    debugger;
    this.memories.forEach((element) => {
      debugger;
      if (element.timeStamp === date) {
        console.log('12');
      }
    });
    const f = this.memories.filter((item) => item.timeStamp == date);
    return of(f);
  }

  getMemoirById(id: String) {
    return of(this.memories.filter((item) => item.id === id));
  }

  createNote(memoir: Memoir) {
    const date: Memoir = { id: uuidv4(), ...memoir };
    this.memories.push(date);
    localStorage.setItem('memories', JSON.stringify(this.memories));
    return of(this.memories);
  }

  encodeImageFileAsURL(element: any) {
    return new Promise((resolve, reject) => {
      const file = element.files[0];
      if (typeof FileReader !== 'undefined') {
        const reader = new FileReader();
        reader.onloadend = function () {
          resolve(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        reject('FileReader not supported');
      }
    });
  }

  exportJSON(data: any, exportName = 'myJSON') {
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(data));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', exportName + '.json');
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
}
