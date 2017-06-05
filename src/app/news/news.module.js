import template from './news.templates.html';
import controller from './news.controller';
import './news.style.scss';

export default angular.module('app.news', [])
    .component('news', {
        template,
        controller,
        controllerAs: 'vm'
    }).name;