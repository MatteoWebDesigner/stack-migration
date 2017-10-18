import angular from 'angular';
import vegetablesModule from './module.js';

const COMPONENT_NAME = 'vegetables';

angular
    .module(vegetablesModule)
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
            this.name = 'Vegetables';
            this.list = ["🥒", "🍆", "🥕", "🌽", "🍅"];
        }
    });

export default COMPONENT_NAME;