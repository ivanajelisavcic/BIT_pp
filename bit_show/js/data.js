var dataModule = (function () {
    function fetchShows(callback) {
        var url = "http://api.tvmaze.com/shows";

        $.get(url, function (data) {
            callback(data.slice(0, 50));
        })
    }


    return {
        fetchShows: fetchShows
    };
})();
