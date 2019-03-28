Vue.component('navbar-items', {
    props: ['item'],
    template: "<a class='nav-item' href=''>{{ item.text }}</a>"
});

Vue.component('navigation-component', {
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

        // Search the array for a page with the name of the current page
        menuItems.find(function (item) {
            // if the item's link is the same as the name of the current page
            if (item.link == pageName) {
                // Tell vue to add the active css class
                item.isActive = true;
            }
            else {
                item.isActive = false;
            }
        });

        // Return our menuItems to the component
        return {
            menuItems
        };
    },
    template: `
        <div class='nav-bar'>
            <navbar-items v-for="item in menuItems" v-bind:item="item" v-bind:href="item.link" v-bind:class="{'active':(item.isActive)}"></navbar-items>
        </div>
    `
});

Vue.component('header-component', {
    props: ['name', 'image'],
    template: `
    <div class='header'>
        <h1 class='header-title'> {{ name }} </h1>
        <img class='header-image' v-bind:src="image"></img>
    </div>
    `
});

Vue.component('page-component', {
    template: `
    <div class='page'>
    </div>
    `
});

var app = new Vue({
    el: '#app'
});
