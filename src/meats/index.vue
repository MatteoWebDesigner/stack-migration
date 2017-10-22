<template>
    <div>
        <h2>Page {{ name }}</h2>
    
        <ul class="list-food">
            <li class="list-food-item" v-for="item in list">{{ item }}</li>
        </ul>
    </div> 
</template>

<script>
    let Meats = {
        data () {
            return {
                name: "Meats",
                list: ["🍔", "🥓", "🍗", "🍖"]
            }
        }
    };

    export default Meats;
</script>