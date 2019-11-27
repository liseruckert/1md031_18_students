'use strict';
var socket = io();

var vm = new Vue({
    el: '#myburgers',
    data: {
        burgers: burgers,
        chosen: [],
        name: "",
        email: "",
        payment: "Swish",
        picked: "Female",
        deliveryLocation: {x: 0, y: 0},
        orderNo: 0,

        details: {},
        orders: {}
    },/*
    created: function () {
        socket.on('initialize', function (data) {
            this.orders = data.orders;
        }.bind(this));

        socket.on('currentQueue', function (data) {
            this.orders = data.orders;
        }.bind(this));
    },*/
    methods: {
        /*
        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },*/
        getNextOrder: function () {
            this.orderNo = this.orderNo +1;
            return this.orderNo;
        },
        displayOrder: function (event) {
            var offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top
            };
            this.deliveryLocation.x = event.clientX - 10 - offset.x;
            this.deliveryLocation.y = event.clientY - 10 - offset.y;
        },
        addOrder: function (event) {
            var theBurgers = "" + this.chosen;
            var customerInfo = "" + this.name + ", " + this.email + ", " + this.payment + ", " + this.picked;
            var locationx = this.deliveryLocation.x;
            var locationy = this.deliveryLocation.y;

            console.log(locationx, locationy, this.getNextOrder());
            console.log(theBurgers, customerInfo);
            var orderobj =  { orderId: this.getNextOrder(),
                details: {x: locationx, y: locationy},
                orderItems: [theBurgers, customerInfo]
            };
            socket.emit("addOrder", orderobj);
            console.log(orderobj);
            document.getElementById("pressedButton").style.display = "block";
        }
    }
});





