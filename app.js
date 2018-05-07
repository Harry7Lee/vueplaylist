new Vue({
    el: "#vue-app",
    data: {
        name: "Harry",
        job: "Product Specilist",
        website: "https://www.baidu.com",
        websiteTag: '<a href="http://www.baidu.com">Baidu</a>',
        age: 24,
        x: 0,
        y: 0
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ", " + this.name;
        },
        add: function(year) {
            this.age += year
        },
        substract: function(year) {
            this.age -= year
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert('You click me!')
        }
    }
});


new Vue({
    el: "#vue-app2",
    data: {
        name: '',
        age: 20,
        a: 0,
        b: 0
    },
    methods: {
        // logName: function() {},
        // logAge: function() {},
        // addToA: function() {
        //     return this.a + this.age
        // },
        // addToB: function() {
        //     return this.b + this.age
        // }
    },
    computed: {
        addToA: function() {
            console.log("addToA")
            return this.a + this.age
        },
        addToB: function() {
            console.log("addToB")
            return this.b + this.age
        }
    }
})