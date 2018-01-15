
new Vue({
    el:'#vue-app',
    data:{
        health:100,
        end:false,
    },
    methods:{
        reduce:function(){
            this.health -= 10
            if (this.health <= 0){
                this.end = !this.end
            }
        },
        restart:function(){
            this.health = 100
            this.end = !this.end
        }
    },
    computed:{

    }
})