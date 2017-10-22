<template>
    <div class="app-shell"> 
        <header>
            <nav>
                <a href="/">Home</a>
                <a href="/fruits">Fruits</a>
                <router-link to="/meats">Meats</router-link>
            </nav>
        </header>
        <main>
            <router-view class="app-shell-content"></router-view>
        </main>
    </div>
</template>