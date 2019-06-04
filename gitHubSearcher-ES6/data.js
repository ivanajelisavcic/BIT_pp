const dataModule = (function () {

    function fetchGitHubUsers(searchContent, onSuccess) {
        const requestUrl = `https://api.github.com/search/users?q=${searchContent}`;

        $.get(requestUrl, function (data) {

            console.log(data);
            onSuccess(data);
        })
    }

    return {

        fetchGitHubUsers

    }

})();


