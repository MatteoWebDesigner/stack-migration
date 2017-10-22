import angular from 'angular';
import fruitsModule from './module.js';

const COMPONENT_NAME = 'fruits';

angular
    .module(fruitsModule)
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
            this.name = 'Fruits';
            this.list = ["🍏", "🍋", "🍉", "🍇"];
        }
    });

export default COMPONENT_NAME;