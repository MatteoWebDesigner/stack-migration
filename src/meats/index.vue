<template>
    <div>
        <h2>Page {{ name }}</h2>
    
        <ul class="list-food">
            <li class="list-food-item" v-for="item in list">{{ item }}</li>
        </ul>

        <h3>Lodash</h3>
        <p>version: {{ version }}</p>
    </div> 
</template>

<script>
    import { VERSION } from "lodash";

    let Meats = {
        data () {
            return {
                name: "Meats",
                list: ["🍔", "🥓", "🍗", "🍖"],
                version: VERSION
            }
        }
    };

    export default Meats;
</script>