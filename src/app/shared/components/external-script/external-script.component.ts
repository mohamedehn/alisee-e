import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-external-script',
  standalone: true,
  template: '<div id="ie_dynamic_widget" data-base-color=""></div>',
  styleUrls: ['./external-script.component.scss']
})
export class ExternalScriptComponent implements AfterViewInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.loadScript();
  }

  loadScript(): void {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.psychologue.net/widget/company_schedule?com=434216&h=ea20be21d68492090b0e60710cf4f60d&v=10&utm_source=434216&utm_medium=widget&utm_campaign=widget-company_schedule';
    script.async = false; // Charge le script de manière synchrone

    this.renderer.appendChild(this.el.nativeElement.querySelector('#ie_dynamic_widget'), script);
  }
}
