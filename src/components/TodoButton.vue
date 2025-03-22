<template>
    <button>
        <slot name="header">Имя пользователя</slot>
        <slot name="footer">Дополнительная информация</slot>
    </button>
</template>
<script>
export default {
    name: 'TodoButton',
}
</script>
<style>
button {
    padding: 10px 20px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>