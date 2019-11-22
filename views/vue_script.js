var vm = new Vue({
    el: '#myburgers',
    data: {
        burgers: burgers,
        chosen: [],
        name: "",
        email: "",
        street: "",
        number: "",
        payment: "Swish",
        picked: "Female",
        orderlist: " "
    },
    methods: {
        markDone: function () {
            this.orderlist = "Your order: " + this.chosen + "; " + this.name + " " + this.street + " " + this.number + " " + this.email + " " + this.payment + " " + this.picked

        }
    }
});



