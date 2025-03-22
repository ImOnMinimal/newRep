<template>
    <div v-if="pizza">
        <h1>{{ pizza.name }}</h1>
        <h3>Ингредиенты:</h3>
        <ul>
            <li v-for="ingredient in pizza.ingredients" :key="ingredient">{{ ingredient }}</li>
        </ul>
        <router-link to="/">Назад к списку пицц</router-link>
    </div>
    <div v-else>
        <p>Пицца не найдена!</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pizzas: [
                { id: 1, name: 'Маргарита', ingredients: ['Томатный соус', 'Сыр', 'Базилик'] },
                { id: 2, name: 'Пепперони', ingredients: ['Томатный соус', 'Сыр', 'Пепперони'] },
                { id: 3, name: 'Чизбургер', ingredients: ['Томатный соус', 'Сыр', 'Говядина', 'Огурцы'] }
            ]
        };
    },
    computed: {
        pizza() {
            const pizzaId = parseInt(this.$route.params.id);
            return this.pizzas.find(pizza => pizza.id === pizzaId);
        }
    }
};
</script>

<style scoped>
h1 {
    font-size: 2em;
}
</style>