(function(){
    'use strict';

    angular.module('api.photos', [])
    .factory('Photos', function(){

        var Photos = {};

        var photosList = [
            {
                description: 'from left: Peter, Michael, Micky and Davey',
                url: 'http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/monkees_lead.jpg?itok=PPeT4ZI7&resize=1100x619',
            },
            {
                description: '1969 television special, 1/3 Revolutions Per Monkee',
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Monkees_Television_special_1969.jpg/220px-Monkees_Television_special_1969.jpg',
            },
            {
                description: "Davey's not on brief!",
                url: 'https://images-na.ssl-images-amazon.com/images/I/C1YdDyfno6S._SL1000_.png',
            },
            {
                description: "The Monkees had to learn their instruments from scratch, having originally been thrown together for showbiz and tv",
                url: 'https://cdn-images-1.medium.com/max/2000/1*lOoOaW6r6F6hDK5GzQ1MkA.jpeg',
            },
            {
                description: "From left to... Oh, the chairs should help!",
                url: 'https://media.npr.org/assets/img/2016/05/17/the-monkees_wide-1f3bc50b16a1851423f14dce7d4f2d69038538cd-s900-c85.jpg',
            },
            {
                description: "Davey wrestling with his maracas!",
                url: 'https://www.monkeeslivealmanac.com/uploads/7/8/9/5/7895731/4413688_orig.jpg',
            },
            {
                description: "Boyzone and Take That, eat your hearts out!",
                url: 'https://lastfm-img2.akamaized.net/i/u/ar0/c6f23d8ab1c2499cb0d8202e18061673.jpg',
            },
            {
                description: "A tree-mendous picture! sorry..",
                url: "http://ultimateclassicrock.com/files/2017/01/more-of-alt.jpg?w=980&q=75",
            },
            {
                description: "Fake-tan or the photo's exposure, you decide..",
                url: "http://williamsstudio2.com/blog/wp-content/uploads/2014/08/monkees-60s-24.jpg",
            },
            {
                description: "Peter: 'Here's my Robin Hood impression!'",
                url: "https://flashbak.com/wp-content/uploads/2017/09/The-Monkees-Pop-Group-1967.jpg",
            },
        ]

        Photos.all = function(){
            return photosList;
        };

        return Photos;

    });
})();