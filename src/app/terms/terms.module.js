import template from './terms.templates.html';
import controller from './terms.controller';
import './terms.style.scss';

export default angular.module('app.terms', [])
    .component('terms', {
        template,
        controller,
        controllerAs: 'vm'
    }).name;