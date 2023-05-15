import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouteConfig, appRoutes } from "src/app/configs/route";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public routes: RouteConfig[] = appRoutes;
}