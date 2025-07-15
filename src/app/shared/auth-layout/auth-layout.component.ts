import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth-layout',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent {
 @Input() activeTab: 'login' | 'nafath' = 'login';
  @Input() title = 'عنوان';
  @Input() showTabs = true;
  @Input() contentTemplate: any;
  @Input() onSwitchTab!: (tab: 'login' | 'nafath') => void;
  svgContent: SafeHtml = '';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    this.loadSvg();
  }

  loadSvg() {
    this.http.get('assets/svg/logo.svg', { responseType: 'text' }).subscribe(
      svg => {
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svg);
      },
      err => {
        console.error('Error loading SVG:', err);
      }
    );
  }
}
