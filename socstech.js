Vue.component('navbar-items', {
    props: ['item'],
    template: "<a class='nav-item' href=''>{{ item.text }}</a>"
});

var navigationBar = new Vue({
    el: '#navbar',
    data: {
        items: [
            { link: 'index.html', text: 'Home' },
            { link: 'guides.html', text: 'Guides' },
            { link: 'resources.html', text: 'Resources' },
            { link: 'contact.html', text: 'Contact Us' }
        ]
    }
});
