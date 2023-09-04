const { ref, computed } = Vue;

const product_class = [
    {
        name: '果類',
        img: 'img/百花湯浴包1.jpg',
    },
    {
        name: '浴包類',
        img: 'img/百花湯浴包1.jpg',
    },
    {
        name: '茶類',
        img: 'img/百花湯浴包1.jpg',
    },
    {
        name: '雞湯類',
        img: 'img/百花湯浴包1.jpg',
    },
    {
        name: '生活類',
        img: 'img/百花湯浴包1.jpg',
    },
]
const products = ref([
    {
        class: '果類',
        name: '東洋',
        price: 85,
        amount: 0,
        img: 'img/東洋.jpg',
        hover_img: 'img/百花湯浴包1.jpg',
    },
    {
        class: '果類',
        name: '洛梅',
        price: 50,
        amount: 0,
        img: 'img/洛梅.jpg',
        hover_img: 'img/百花湯浴包1.jpg',
    },
    {
        class: '果類',
        name: '棗橙',
        price: 50,
        amount: 0,
        img: 'img/棗橙.jpg',
        hover_img: 'img/百花湯浴包1.jpg',
    },
    {
        class: '茶類',
        name: '靈芝七葉膽茶',
        price: 30,
        amount: 0,
        img: 'img/靈芝七葉膽茶.jpg',
        hover_img: 'img/百花湯浴包1.jpg',
    },
    {
        class: '茶類',
        name: '防護茶',
        price: 30,
        amount: 0,
        img: 'img/防護茶.jpg',
        hover_img: 'img/百花湯浴包1.jpg',
    },
    {
        class: '茶類',
        name: '養生茶',
        price: 25,
        amount: 0,
        img: 'img/養生茶.jpg',
        hover_img: 'img/百花湯浴包1.jpg',
    },
    {
        class: '浴包類',
        name: '百花湯浴包',
        price: 75,
        amount: 0,
        img: 'img/百花湯浴包.jpg',
        hover_img: 'img/百花湯浴包1.jpg',
    },
    {
        class: '浴包類',
        name: '放鬆湯浴包',
        price: 75,
        amount: 0,
        img: 'img/放鬆湯浴包.jpg',
        hover_img: 'img/百花湯浴包1.jpg',
    },
    {
        class: '浴包類',
        name: '抹草湯浴包',
        price: 75,
        amount: 0,
        img: 'img/抹草湯浴包.jpg',
        hover_img: 'img/百花湯浴包1.jpg',
    },
    {
        class: '雞湯類',
        name: '粉光參雞湯',
        price: 400,
        amount: 0,
        img: 'img/粉光參雞湯.jpg',
        hover_img: 'img/百花湯浴包1.jpg',
    },
    {
        class: '雞湯類',
        name: '藥膳雞湯',
        price: 180,
        amount: 0,
        img: 'img/藥膳雞湯.jpg',
        hover_img: 'img/百花湯浴包1.jpg',
    },
    {
        class: '雞湯類',
        name: '溫膳湯',
        price: 180,
        amount: 0,
        img: 'img/溫膳湯.jpg',
        hover_img: 'img/百花湯浴包1.jpg',
    },
    {
        class: '生活類',
        name: '情緒藥膳包',
        price: 250,
        amount: 0,
        img: 'img/情緒藥膳包.jpg',
        hover_img: 'img/百花湯浴包1.jpg',
    },
    {
        class: '生活類',
        name: '藥燉排骨',
        price: 90,
        amount: 0,
        img: 'img/藥燉排骨.jpg',
        hover_img: 'img/百花湯浴包1.jpg',
    },
    {
        class: '生活類',
        name: '靜好 好浴皂',
        price: 290,
        amount: 0,
        img: 'img/靜好 好浴皂.jpg',
        hover_img: 'img/百花湯浴包1.jpg',
    }
])
const currentClass = ref('果類')
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
        const onMouseMove = (e, url) => {
            const img = e.querySelector('img')
            img.src = url;
        }
        const onMouseOut = (e, url) => {
            const img = e.querySelector('img')
            img.src = url;
        }

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