<template>
    <div>
        <h2>Page {{ name }}</h2>
    
        <ul class="list-food">
            <li class="list-food-item" v-for="item in list">{{ item }}</li>
        </ul>
    </div> 
</template>

<script>
    let Vegetables = {
        data () {
            return {
                name: "Vegetables",
                list: ["🥒", "🍆", "🥕", "🌽", "🍅"]
            }
        }
    };

    export default Vegetables;
</script>