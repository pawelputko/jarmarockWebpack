import template from './bands.templates.html';
import controller from './bands.controller';
import './bands.style.scss';

export default angular.module('app.bands', [])
    .component('bands', {
        template,
        controller,
        controllerAs: 'vm'
    }).name;