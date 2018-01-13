
new Vue({
    el:'#vue-app',
    data:{
        name:'hanhan',
        job:'web fe',
        website:'http://www.baidu.com',
        websiteTag:'<a href="http://www.baidu.com"> baidu </a>',
    },
    methods:{
        greet: function(time){
            return 'Good '+ time + ' ' + this.name +'!'
        }
    },
})
