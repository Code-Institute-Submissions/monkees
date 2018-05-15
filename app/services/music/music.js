(function(){
    'use strict';

    angular.module('api.music', [])
    .factory('Music', function(){
        
        var Music = {};

        var musicList = [
            {
                title: 'the monkees (theme song)',
                url: 'https://www.youtube.com/watch?v=hUzexePjWlI',
                released: new Date(1967, 2),
                label: 'colgems',
                songwriters: 'tommy boyce and bobby hart',
                producers: 'tommy boyce, bobby hart and jack keller',
            },
            {
                title: 'last train to clarksville',
                url: 'https://www.youtube.com/watch?v=ZcXpKiY2MXE',
                released: new Date(1966, 8),
                label: 'colgems',
                songwriters: 'tommy boyce and bobby hart',
                producers: 'tommy boyce and bobby hart',
            },
            {
                title: 'daydream believer',
                url: 'https://www.youtube.com/watch?v=xvqeSJlgaNk',
                released: new Date(1967, 10),
                label: 'colgems',
                songwriters: 'john stewart',
                producers: 'chip douglas',
            },
            {
                title: 'listen to the band',
                url: 'https://www.youtube.com/results?search_query=monkees+listen+to+the+band',
                released: new Date(1969, 4),
                label: 'colgems',
                songwriters: 'michael nesmith',
                producers: 'michael nesmith',
            },
            {
                title: 'a little bit me, a little bit you',
                url: 'https://www.youtube.com/watch?v=Sz-2jckjeHo',
                released: new Date(1967, 3),
                label: 'colgems',
                songwriters: 'neil diamond',
                producers: 'jeff barry',
            },
            {
                title: "i'm a believer",
                url: 'https://www.youtube.com/watch?v=wB9YIsKIEbA',
                released: new Date(1966, 11),
                label: 'colgems',
                songwriters: 'neil diamond',
                producers: 'jeff barry',
            },
            {
                title: "i wanna be free",
                url: 'https://www.youtube.com/watch?v=wIFLRasX2UQ',
                released: new Date(1967, 5),
                label: 'rca',
                songwriters: 'tommy boyce, bobby hart , michael nesmith',
                producers: 'tommy boyce, bobby hart, douglas farthing-hatlelid',
            },
            {
                title: "pleasant valley sunday",
                url: 'https://www.youtube.com/watch?v=sUzs5dlLrm0',
                released: new Date(1967, 7),
                label: 'colgems',
                songwriters: 'gerry goffin, carole king',
                producers: 'chip douglas',
            },
            {
                title: "(i'm not your) steppin' stone",
                url: 'https://www.youtube.com/watch?v=nCM7qcRyfKo',
                released: new Date(1966, 11),
                label: 'colgems',
                songwriters: 'tommy boyce, bobby hart',
                producers: 'tommy boyce, bobby hart',
            },
            {
                title: "shades of grey",
                url: 'https://www.youtube.com/watch?v=SubpzqswJRE',
                released: new Date(1967, 5),
                label: 'rhino',
                songwriters: 'barry mann, cynthia weil',
                producers: 'barry mann, cynthia weil',
            },
        ];

        Music.all = function(){
            return musicList;
        };

        return Music;

    });
})();