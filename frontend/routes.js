'use strict';

var app = require('./app'),
    config = require('config');

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'partials/home.html'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'partials/about.html'
    })
    .state('contacts', {
        url: '/contacts',
        templateUrl: 'partials/contacts.html',
        controller: 'ContactsController'
    })
    .state('github', {
        url: '/github/register',
        controller: function() {
            window.location = 'https://github.com/login/oauth/authorize?client_id=' + config.github.clientId;
        }
    });
});

