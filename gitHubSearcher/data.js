var dataModule = (function () {

    function fetchGitHubUsers(searchContent, onSuccess) {
        var requestUrl = "https://api.github.com/search/users?q=" + searchContent;

        $.get(requestUrl, function (data) {

            console.log(data);
            onSuccess(data);
        })
    }

    return {

        fetchGitHubUsers: fetchGitHubUsers,

    }

})();


