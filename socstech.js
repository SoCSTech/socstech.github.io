Vue.component('header-component', {
    props: ['name', 'image'],
    template: `
    <div id="page-header" class='header'>
        <h1 class='header-title'> {{ name }} </h1>
        <img class='header-image' v-bind:src="image"></img>
    </div>
    `
});

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

Vue.component('staff-profile-component', {
    props: ['staff'],
    template: `
    <div class='profile'>
        <img class='staff-picture' v-bind:src="staff.image"></img>
        <h1 class='staff-name'> {{ staff.name }} </h1>
        <h2 class='staff-role'> Role: {{ staff.role }} </h2>
        <h2 class='staff-role' v-if='staff.speciality !== ""'> Specialisation: {{ staff.speciality }} </h2>
        <div class='link-icon' style='background-image:url("content/uol_logo.jpg")' v-if='staff.staff_profile !== ""'>
            <a v-bind:href='staff.staff_profile'></a>
        </div>
        <div class='link-icon' style='background-image:url("content/github.png")' v-if='staff.github !== ""'>
            <a v-bind:href='staff.github'></a>
        </div>
    </div>`
});

Vue.component('home-page-component', {
    data: function () {
        var staffMembers = [
            { 
                name: "Matt Ashton", 
                role: "Technical Resource Manager", 
                image: "content/profile.png",
                speciality: "Infrastructure",
                staff_profile: "",
                github: ""
            },
            { 
                name: "Tom Reed", 
                role: "Technician", 
                image: "content/staff_treed.jpg",
                speciality: "Development and Linux",
                staff_profile: "https://staff.lincoln.ac.uk/treed",
                github: "https://github.com/treed1104"
            },
            { 
                name: "Jason Hall", 
                role: "Technician", 
                image: "content/profile.png",
                speciality: "Frontline Tech support",
                staff_profile: "https://staff.lincoln.ac.uk/jahall",
                github: "https://github.com/Hullabaloo94"
            }
        ];
        return {
            staffMembers
        };
    },
    template: `
    <div class='page-content'>
        <h1 class='content-header'> The School of Computer Science<br>Technician Team </h1>
        <div class='team-profiles'>
            <staff-profile-component v-for="staff in staffMembers" v-bind:staff="staff"></staff-profile-component>
        </div>
    </div>
    `
});

Vue.component('guide-page-component', {
    template: `
    <div class='page-content'>
        <h1 class='content-header'> Guides </h1>
        <div>
            <h1 class=''> UNDER CONSTRUCTION </h1>
        </div>
    </div>
    `
});

Vue.component('resources-page-component', {
    template: `
    <div class='page-content'>
        <h1 class='content-header'> Resources </h1>
        <div>
            <h1 class=''> UNDER CONSTRUCTION </h1>
        </div>
    </div>
    `
});

Vue.component('contact-page-component', {
    template: `
    <div class='page-content'>
        <h1 class='content-header'> Contact Us </h1>
        <div>
            <h1 class=''> UNDER CONSTRUCTION </h1>
        </div>
    </div>
    `
});

Vue.component('page-component', {
    props: ['page'],
    template: `
    <div id="page-body" class='page' v-if='page == "home"'>
        <home-page-component>
        </home-page-component>
    </div>

    <div id="page-body" class='page' v-else-if='page == "guides"'>
        <guide-page-component>
        </guide-page-component>
    </div>

    <div id="page-body" class='page' v-else-if='page == "resources"'>
        <resources-page-component>
        </resources-page-component>
    </div>

    <div id="page-body" class='page' v-else-if='page == "contact"'>
        <contact-page-component>
        </contact-page-component>
    </div>

    <div id="page-body" class='page' v-else>
        <h1 class='header-title'> Unknown </h1>
    </div>
    `
});

Vue.component('footer-component', {
    props: ['logo'],
    template: `
    <div class='footer'>
        <div class='footer-content'>
            <img class='footer-logo' v-if='logo !== ""' v-bind:src="logo"></img>
            <h1 class='footer-text'> Developed by Tom Reed, <br> School of Computer Science </h1>
            <img class='footer-logo' v-if='logo !== ""' v-bind:src="logo"></img>
        </div>
    </div>
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
