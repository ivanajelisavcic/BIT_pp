var uiModule = (function () {

    var $searchInput = $(".searchField");
    var $showContainer = $(".showContainer");

    function getSearchInput() {
        return $searchInput.val();
    }

    function renderShows(shows) {
        shows.forEach(function (show) {
            $showContainer.append('<a href=""><div class="infoContainer"><img src="' + show.image.medium + '" alt=""><h4>' + show.name + '</h4></div></a>');

        });
    }

    return {
        getSearchInput: getSearchInput,
        renderShows: renderShows
    }
})();