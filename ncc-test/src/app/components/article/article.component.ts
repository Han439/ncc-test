import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @Input() title!: string;
  @Input() content!: string;
  @Input() image!: string;
}