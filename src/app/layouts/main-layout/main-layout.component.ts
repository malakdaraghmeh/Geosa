import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, BreadcrumbComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrls:[ './main-layout.component.css']
})
export class MainLayoutComponent {

}
