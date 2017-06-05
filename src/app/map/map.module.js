import template from './map.templates.html';
import controller from './map.controller';
import './map.style.scss';

export default angular.module('app.map', [])
    .component('map', {
        template,
        controller,
        controllerAs: 'vm'
    }).name;