const ctrlModule = (function (ui, data) {


    function setupEventListener() {
        $(".btn").click(function () {
            const searchContent = ui.getSearchInput();

            function onSuccess(users) {
                ui.displayGitHubUsers(users);

            }

            data.fetchGitHubUsers(searchContent, onSuccess);
        })

    }

    // function setupUserEventListener() {
    //     $(".appender").click(function () {

    //     }
    // };

    function init() {
        setupEventListener();

    }
    return {
        init

    }

})(uiModule, dataModule)

