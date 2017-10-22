import angular from 'angular';
import APP_MODULE from './app.module.js';

const COMPONENT_NAME = 'appShell';

angular
.module(APP_MODULE)
.component(COMPONENT_NAME, {
    template: `
        <header>
            <nav>
                <a ui-sref="app.vegatables" ui-sref-active="is-active">Home</a>
                <a ui-sref="app.fruits" ui-sref-active="is-active">Fruits</a>
                <a href="/meats">Meats</a>
            </nav>
        </header>
        <main>
            <ui-view class="app-shell-content"></ui-view>
        </main>  
    `
});

export default COMPONENT_NAME;