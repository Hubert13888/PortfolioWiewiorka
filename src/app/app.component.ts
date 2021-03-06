import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from './../environments/environment';
import { deleteCookie, getCookie, setCookie } from '../assets/scripts/cookies';
import { faPizzaSlice, faEnvelope, faBars, faCodeBranch} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faBitbucket, faLinkedin, faGitAlt } from '@fortawesome/free-brands-svg-icons';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  selectedLang = 'pl';
  fonts = {
    faCodeBranch,
    faPizzaSlice,
    faFacebook,
    faGithub,
    faBitbucket,
    faEnvelope,
    faLinkedin,
    faBars
  };

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'pl']);
    const lang = getCookie('lang');
    if (lang === '') {
      translate.use(environment.lang);
      setCookie('lang', environment.lang, 30);
      this.selectedLang = environment.lang;
    }
    else {
      translate.use(lang);
      this.selectedLang = lang;
    }
  }

  useLanguage(language: any) {
    setCookie('lang', language, 30);
    this.translate.use(language);
  }

  mail_show() {
    const lang = getCookie('lang');
    switch(lang) {
      case 'pl':
        alert("Mail oficjalny: \n\nhubertsiwczynski@gmail.com");
        break;
      case 'en':
        alert("Official e-mail: \n\nhubertsiwczynski@gmail.com");
        break;
    }
  }
  mobile_menu_toggle() {
    document.getElementById('mobile_menu')
          .classList.toggle('toggle_mobile_menu');
  }

  foot_toggle() {
    document.getElementById('footbar_close')
      .classList.toggle('foot_close_rotate_animaion');
    document.getElementsByClassName('footbar')[0]
      .classList.toggle('foot_close_slide_animaion');
  }
  slideBar_close_active() {
    const element = document.getElementsByClassName('slideBar_wrapper')[0];
    element.classList.toggle('slideBar_close_active');
  }
}
