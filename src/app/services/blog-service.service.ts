import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class BlogService {
  
  public getBlogList(): any {
    return fetch('assets/posts/')
      .then(response => response.text())
      .then(htmlText => {
        console.log(htmlText);
      })
  }
}