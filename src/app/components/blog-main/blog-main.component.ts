import {Component} from '@angular/core';
import { BlogService } from '../../services/blog-service.service';

@Component({
  selector: 'blog-main',
  templateUrl: 'blog-main.component.html',
  styleUrls: ['blog-main.component.scss']
})
export class BlogMainComponent {
  constructor(private _blogService: BlogService) {
    this._blogService.getBlogList();
  }
}