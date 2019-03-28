Vue.component('navbar-items', {
    props: ['item'],
    template: "<a class='nav-item' href=''>{{ item.text }}</a>"
})

Vue.component('header-component', {
    props: ['name'],
    data: function () {
        // Our array of the items to render in the navigation bar
        var menuItems = [
            { link: 'index.html', text: 'Home', isActive: false },
            { link: 'guides.html', text: 'Guides', isActive: false },
            { link: 'resources.html', text: 'Resources', isActive: false },
            { link: 'contact.html', text: 'Contact Us', isActive: false }
        ];

        // Get the page name for finding out the active page
        var pageName = document.location.pathname;
        pageName = pageName.substring(pageName.lastIndexOf('/') + 1);


        menuItems.find(function(item) {
            if (item.link == pageName) {
                item.isActive = true;
            }
        });

        // Return our menuItems to the component
        return { menuItems };
    },
    template: `
    <div class='header'>
        <h1 class='header-title'> {{ name }} </h1>
        <div class='nav-bar'>
            <navbar-items v-for="item in menuItems" v-bind:item="item" v-bind:href="item.link" v-bind:class="{'active':(item.isActive)}"></navbar-items>
        </div>
    </div>`
})

var app = new Vue({
    el: '#app',
})