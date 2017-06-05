import template from './about.templates.html';
import controller from './about.controller';
import './about.style.scss';

export default angular.module('app.about', [])
    .component('about', {
        template,
        controller,
        controllerAs: 'vm'
    }).name;