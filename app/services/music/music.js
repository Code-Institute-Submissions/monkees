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
        ];

        Music.all = function(){
            return musicList;
        };

        return Music;

    });
})();