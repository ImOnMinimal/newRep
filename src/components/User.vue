<template>
    <div>User ID: {{ userId }}</div>
</template>
<script>
// export default {
//     computed:{
//         userId(){
//             return this.$store.state.userId
//         }
//     }
// }

export default {
    data() {
        return {
            userId: this.$route.params.id
        }
    },
    created() {
        console.log('aaaaaa')
        this.$watch(
            () => this.this.$route.params,
            (toParams, previousParams) => {
                this.userId = toParams.id
                console.log('Параметр изменился с', previousParams, 'на', toParams.id)
            }
        )

    }
}
</script>