<template>
    <div>
        <h2>Page {{ name }}</h2>
    
        <ul class="list-food">
            <li class="list-food-item" v-for="item in list">{{ item }}</li>
        </ul>

        <h3>Total {{ name }} cost</h3>
        <p>amount: {{ amount }}</p>
    </div> 
</template>

<script>
    import sum from "lodash-next/sum";

    let amount = sum([10, 25]);

    let Meats = {
        data () {
            return {
                name: "Meats",
                list: ["🍔", "🥓", "🍗", "🍖"],
                amount
            }
        }
    };

    export default Meats;
</script>