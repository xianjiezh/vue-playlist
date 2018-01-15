
new Vue({
    el:'#vue-app',
    data:{
        changeColor: true,
        changeLength: false,
    },
    methods:{

    },
    computed:{
        compClasses: function(){
            return {
                changeColor:this.changeColor,
                changeLength:this.changeLength,
            }
        }
    },
})
