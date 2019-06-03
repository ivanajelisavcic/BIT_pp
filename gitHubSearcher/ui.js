var uiModule = (function () {

    var $searchInput = $(".search");
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

            var container = $("<div></div>");
            var image = $("<img/>").attr('src', photo);
            var photoInCont = container.append(image);
            $userContainer.append(photoInCont);


        });
    }


    return {
        getSearchInput: getSearchInput,
        displayGitHubUsers: displayGitHubUsers,
    }

})()



