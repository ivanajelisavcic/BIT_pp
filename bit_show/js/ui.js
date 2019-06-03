var uiModule = (function () {

    var $searchInput = $(".searchField");
    var $showContainer = $(".showContainer");

    function getSearchInput() {
        return $searchInput.val();
    }

    function renderShows(shows) {
        shows.forEach(function (show) {
            var $name = $('<p>').text(show.name);
            $showContainer.append($name);
        });
    }

    return {
        getSearchInput: getSearchInput,
        renderShows: renderShows
    }
})();