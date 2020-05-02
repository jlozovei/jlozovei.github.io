// titles
import data from '../data/projects.json';

// styles
import '../css/reset.css';
import '../css/index.css';

// modules
import ListItem from './modules/listItem';

(() => {
  const app = {
    init() {
      this.cacheDOM();
    },

    cacheDOM() {
      this.list = document.getElementById('list');

      this.bindEvents();
    },

    bindEvents() {
      this.loadProjects();

      this.footerYear();
    },

    loadProjects() {
      const { projects } = data;

      let html = '';

      for (const project of projects) html += ListItem(project);

      setTimeout(() => {
        this.list.innerHTML = html;
      }, 2000);
    },

    footerYear() {
      const currentYear = new Date().getFullYear();
      document.querySelector('footer span').innerText = currentYear;
    }
  };

  app.init();
})();
