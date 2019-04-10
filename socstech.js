Vue.component('navigation-items-component', {
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
        <div id='page-navbar' class='nav-bar'>
            <navigation-items-component v-for="item in menuItems" v-bind:item="item" v-bind:href="item.link" v-bind:class="{'active':(item.isActive)}"></navigation-items-component>
        </div>
    `
});

Vue.component('header-component', {
    props: ['name', 'image'],
    template: `
    <div id="page-header" class='header'>
        <h1 class='header-title'> {{ name }} </h1>
        <img class='header-image' v-bind:src="image"></img>
    </div>
    `
});

Vue.component('page-component', {
    props:['page'],
    template: `
    <div id="page-body" class='page' v-if='page == "home"'>
        <home-page-component>
        </home-page-component>
    </div>
    <div id="page-body" class='page' v-else-if='page == "guide"'>
        <h1 class='header-title'> Guides </h1>
    </div>
    <div id="page-body" class='page' v-else-if='page == "resources"'>
        <h1 class='header-title'> Resources </h1>
    </div>
    <div id="page-body" class='page' v-else-if='page == "contact"'>
        <h1 class='header-title'> Contact Us </h1>
    </div>
    <div id="page-body" class='page' v-else>
        <h1 class='header-title'> Unknown </h1>
    </div>
    `
});

Vue.component('home-page-component', {
    template: `
        <h1 class='header-title'> Home </h1>
    `
});

var app = new Vue({
    el: '#app'
});

// On the windows scroll event
$(window).scroll(function () {
    // Get the height of the page-header
    var headerDivHeight = $('#page-header').height();

    if ($(window).scrollTop() >= headerDivHeight) {
        // If the windows scroll position is passed the page-header height
        $('#page-navbar').addClass('fix-navbar-position');        // add the fixed position css class
    }
    if ($(window).scrollTop() < headerDivHeight) {
        // If the scroll is not passed the page-header
        $('#page-navbar').removeClass('fix-navbar-position');     // remove the fixed position css class
    }
});
