var uiModule = (function () {

    var $searchInput = $(".searchField");
    var $userContainer = $(".userContainer");

    function getSearchInput() {

        return $searchInput.val();

    }

    function displayGitHubUsers(data) {
        $userContainer.html("");

        var users = data.items;

        users.forEach(function (user) {

            var photo = user.avatar_url;
            var username = user.login;
            $userContainer.append('<a href="' + user.html_url + '">' + '<div id ="appender"><img src="' + photo + '" class="userImage"><p id="beautyP">' + username + '</p></div></a>')

            // var imageLink = $('<a href= 'user.url'></a>');
            // $(container).append("<p id = 'beautyP'>" + username + "</p>");
            // $(username).click(userLink);
        });
    }


    return {
        getSearchInput: getSearchInput,
        displayGitHubUsers: displayGitHubUsers,
    }

})()



