import angular from 'angular';
import meatsModule from './module.js';

const COMPONENT_NAME = 'meats';

angular
    .module(meatsModule)
    .component(COMPONENT_NAME, {
        template: `
            <div>
                <h2>Page {{ $ctrl.name }}</h2>
            
                <ul class="list-food">
                    <li class="list-food-item" ng-repeat="item in $ctrl.list">{{ item }}</li>
                </ul>
            </div>   
        `,  
        controller: function() {
            this.name = 'Meats';
            this.list = ["🍔", "🥓", "🍗", "🍖"];
        }
    });

export default COMPONENT_NAME;