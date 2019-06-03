/* Write a function to hide email addresses to protect them from unauthorized users.

    "somerandomaddress@example.com" -> "somerand...@example.com"  */
    

    function hideEmail(emailAddress) {
        var monkey = emailAddress.indexOf("@");
        protectedAddress = emailAddress.slice(0, 4) + "..." + emailAddress.slice(monkey, emailAddress.length);
        return protectedAddress;
    
    }
    console.log(hideEmail("somerandomaddress@example.com"));


    // drugi (bolji) nacin:

    function hideEmail (emailAddress) {
    var splitted, emailUsername, emailDomain, avg
        splitted = emailAddress.split("@");
        emailUsername = splitted[0];
        emailDomain = splitted[1];
        avg = emailUsername.length / 2;
        emailUsername = emailUsername.substring(0, (emailUsername.length-avg));

        return emailUsername + "...@" + emailDomain;

    }

    console.log(hideEmail("somerandomaddress@example.com"));
