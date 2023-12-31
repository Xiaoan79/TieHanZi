const app = Vue.createApp({
    data(){
        return{
            products:[
                {
                id:1,
                name:'東洋',
                price:85,
                amount:0,
                img:'img/東洋.jpg',
            },
                {
                id:2,
                name:'洛梅',
                price:50,
                amount:0,
                img:'img/洛梅.jpg',
            },
                {
                id:3,
                name:'棗橙',
                price:50,
                amount:0,
                img:'img/棗橙.jpg',
            },
                {
                id:4,
                name:'靈芝七葉膽茶',
                price:30,
                amount:0,
                img:'img/靈芝七葉膽茶.jpg',
            },
                {
                id:5,
                name:'防護茶',
                price:30,
                amount:0,
                img:'img/防護茶.jpg',
            },
                {
                id:6,
                name:'養生茶',
                price:25,
                amount:0,
                img:'img/養生茶.jpg',
            },
                {
                id:7,
                name:'百花湯浴包',
                price:75,
                amount:0,
                img:'img/百花湯浴包.jpg',
            },
                {
                id:8,
                name:'放鬆湯浴包',
                price:75,
                amount:0,
                img:'img/放鬆湯浴包.jpg',
            },
                {
                id:9,
                name:'抹草湯浴包',
                price:75,
                amount:0,
                img:'img/抹草湯浴包.jpg',
            },
                {
                id:9,
                name:'粉光參雞湯',
                price:400,
                amount:0,
                img:'img/粉光參雞湯.jpg',
            },
            {
                id:9,
                name:'藥膳雞湯',
                price:180,
                amount:0,
                img:'img/藥膳雞湯.jpg',
            },
            {
                id:9,
                name:'溫膳湯',
                price:180,
                amount:0,
                img:'img/溫膳湯.jpg',
            },
            {
                id:9,
                name:'情緒藥膳包',
                price:250,
                amount:0,
                img:'img/情緒藥膳包.jpg',
            },
            {
                id:9,
                name:'藥燉排骨',
                price:90,
                amount:0,
                img:'img/藥燉排骨.jpg',
            },
            {
                id:9,
                name:'靜好 好浴皂',
                price:290,
                amount:0,
                img:'img/靜好 好浴皂.jpg',
            },
        ],
        toggleShopFlag:1,
        }
    },
    computed:{
        shopSum(){
            let sum = 0;
            for(let i of this.products){
                sum += i.amount * i.price;
            }
            return sum;
        },
    },
    methods:{
    }
}).mount('#app');