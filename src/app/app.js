import angular from 'angular';
import terms from './terms/terms.module'
import about from './about/about.module'
import bands from './bands/bands.module'
import map from './map/map.module'
import news from './news/news.module'

import '../style/app.scss';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://google.com';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [terms, about, bands, map, news])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;