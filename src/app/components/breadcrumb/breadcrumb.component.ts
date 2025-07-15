import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';

interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule,RouterModule],
  templateUrl: './breadcrumb.component.html',  
  styleUrls: ['./breadcrumb.component.css']    
})
export class BreadcrumbComponent implements OnDestroy {
  breadcrumbs: Breadcrumb[] = [];
  private subscription: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadcrumbs(this.activatedRoute.root);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private buildBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
  const children = route.children;

  if (children.length === 0) {
    return breadcrumbs;
  }

  for (const child of children) {
    if (child.outlet !== PRIMARY_OUTLET) {
      continue;
    }

    const routeURL = child.snapshot.url.map(segment => segment.path).join('/');
    if (routeURL) {
      url += `/${routeURL}`;
    }

    let label = child.snapshot.data['breadcrumb'];
    if (!label) {
      label = this.formatLabel(routeURL);
    }

    if (label) {
      breadcrumbs.push({ label, url });
    }

    breadcrumbs = this.buildBreadcrumbs(child, url, breadcrumbs);
  }

  return breadcrumbs;
}


  private formatLabel(pathSegment: string): string {
    if (!pathSegment) return '';

    return pathSegment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
