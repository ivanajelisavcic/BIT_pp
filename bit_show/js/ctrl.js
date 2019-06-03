var ctrlModule = (function (ui, data) {
    // function setupEventListener() {
    //     $(".searchField").keydown(function (event) {
    //         event.preventDefault();

    //         if (event.keyCode !== 13) {
    //             return;
    //         }

    //         var searchContent = ui.getSearchInput();

    //     })
    // }

    // setupEventListener();

    function afterShowsLoaded(shows) {
        ui.renderShows(shows);
    }

    data.fetchShows(afterShowsLoaded);
})(uiModule, dataModule);