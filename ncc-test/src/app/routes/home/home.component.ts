import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticleComponent } from "src/app/components/article/article.component";
import { articles } from "src/app/data/article";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ArticleComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public articles = articles;
}