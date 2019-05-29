function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

App.prototype.isCCLicence = function () {
    if (this.licence === "CC") {
        return "This application has CC Licence."
    } else {
        return "Application didn't get CC Licence"
    }
}

App.prototype.numbOfStars = function () {
    this.stars += 1;
}

App.prototype.showStars = function () {
    return this.stars;
}


function WebApp(name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}


WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function () {
    return "Name: " + this.name +
        "\n" + "Url: " + this.url +
        "\n" + "Technology: " + this.reactBased() +
        "\n" + "Licence: " + this.isCCLicence() +
        "\n" + "Stars: " + this.stars +
        "\n";
}

WebApp.prototype.reactBased = function () {
    if (this.technologies === "React") {
        return "This application is based on React";
    } else {
        return "This application isn't based on React";
    }
}

function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}


MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function () {
    return "Name: " + this.name +
        "\n" + "Platform: " + this.forAndroid() +
        "\n" + "Licence: " + this.isCCLicence() +
        "\n" + "Stars: " + this.stars;
}

MobileApp.prototype.forAndroid = function () {
    if (this.platforms === "Android") {
        return "This platform is Android";
    } else {
        return "This platform isn't Android";
    }



}


var Webapp1 = new WebApp("Facebook", "https://www.facebook.com/", "Js", "CC", 5);
console.log(Webapp1.getData());


var Mobileapp1 = new MobileApp("Viber", "Android", "CC", 3);
console.log(Mobileapp1.getData());