const { ref, computed } = Vue;
import { products_data, product_class } from './data.js';

const currentClass = ref('果類')
const products = ref(products_data);
const app = Vue.createApp({
    setup() {
        const product_sum = computed(() => {
            let total = 0
            for (let i of products.value) {
                total += i.amount * i.price
            }
            return total
        })
        const product_amount_total = computed(() => {
            let total = 0
            for (let i of products.value) {
                total += i.amount
            }
            return total
        })

        return {
            currentClass,
            product_class,
            products,
            product_sum,
            product_amount_total
        }
    }
})


app.mount('#app')