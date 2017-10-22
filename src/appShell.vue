<template>
    <div class="app-shell"> 
        <header>
            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/fruits">Fruits</router-link>
                <router-link to="/meats">Meats</router-link>
            </nav>
        </header>
        <main>
            <router-view class="app-shell-content"></router-view>
        </main>
    </div>
</template>