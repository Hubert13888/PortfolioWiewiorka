import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from './../environments/environment';
import { deleteCookie, getCookie, setCookie } from '../assets/scripts/cookies';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'pl']);
    const lang = getCookie('lang');
    if (lang === '') {
      translate.use(environment.lang);
      setCookie('lang', environment.lang, 30);
    }
    else {
      translate.use(lang);
    }
  }

  useLanguage(language: any) {
    alert("I'm very sorry, but this translation is currently unavailable :(");
    /*
    setCookie('lang', language, 30);
    this.translate.use(language);*/ 
  }

  foot_toggle() {
    document.getElementById('footer_close')
      .classList.toggle('foot_close_rotate_animaion');
    document.getElementById('footer_main')
      .classList.toggle('foot_close_slide_animaion');
  }
  slideBar_close_active() {
    const element = document.getElementsByClassName('slideBar_wrapper')[0];
    element.classList.toggle('slideBar_close_active');
  }
}
