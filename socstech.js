Vue.component('navbar-items', {
    props: ['item'],
    template: "<a class='nav-item' href=''>{{ item.text }}</a>"
})

Vue.component('header-component', {
    props: ['name'],
    data: function () {
        return {
            items: [
                { link: 'index.html', text: 'Home' },
                { link: 'guides.html', text: 'Guides' },
                { link: 'resources.html', text: 'Resources' },
                { link: 'contact.html', text: 'Contact Us' }
            ]
        }
    },
    template: `
    <div class='header'>
        <h1 class='header-title'> {{ name }} </h1>
        <div class='nav-bar'>
            <navbar-items v-for="item in items" v-bind:item="item" v-bind:href="item.link"></navbar-items>
        </div>
    </div>`
})

var app = new Vue({
    el: '#app',
})