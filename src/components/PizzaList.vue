<template>
    <div>
        <h1>Список Пицц</h1>
        <ul>
            <li v-for="pizza in pizzas" :key="pizza.id">
                <router-link :to="{ name: 'pizza-detail', params: { id: pizza.id } }">
                    {{ pizza.name }}
                </router-link>
            </li>
        </ul>
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
    }
};
</script>

<style scoped>
h1 {
    font-size: 2em;
}
</style>
