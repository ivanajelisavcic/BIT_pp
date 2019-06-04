const uiModule = (function () {

    const $searchInput = $(".searchField");
    const $userContainer = $(".userContainer");

    function getSearchInput() {

        return $searchInput.val();

    }

    function displayGitHubUsers(data) {
        $userContainer.html("");

        const users = data.items;

        users.forEach(function (user) {

            const photo = user.avatar_url;
            const username = user.login;
            $userContainer.append(`<a href="${user.html_url}"><div id ="appender"><img src="${photo}" class="userImage"><p id="beautyP">${username}</p></div></a>`)

            // const imageLink = $('<a href= 'user.url'></a>');
            // $(container).append("<p id = 'beautyP'>" + username + "</p>");
            // $(username).click(userLink);
        });
    }


    return {
        getSearchInput,
        displayGitHubUsers
    }

})()



