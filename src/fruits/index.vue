<template>
    <div>
        <h2>Page {{ name }}</h2>
    
        <ul class="list-food">
            <li class="list-food-item" v-for="item in list">{{ item }}</li>
        </ul>
    </div> 
</template>

<script>
    let Fruits = {
        data () {
            return {
                name: "Fruits",
                list: ["🍏", "🍋", "🍉", "🍇"]
            }
        }
    };

    export default Fruits;
</script>