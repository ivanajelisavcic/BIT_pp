var ctrlModule = (function (ui, data) {


    function setupEventListener() {
        $(".searchField").click(function () {
            var searchContent = ui.getSearchInput();

            function onSuccess(users) {
                ui.displayGitHubUsers(users);

            }

            data.fetchGitHubUsers(searchContent, onSuccess);

        })

    }

    function init() {
        setupEventListener()

    }
    return {
        init: init

    }

})(uiModule, dataModule)

