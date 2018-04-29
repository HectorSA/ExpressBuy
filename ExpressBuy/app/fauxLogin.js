indexApp.service('fauxLogin', function () {
    var self = this;

    // Array of all users on the site
    this.users = [];

    // Used to add a user aka register
    this.addUser = function (email, firstName, lastName, password) {
        user = {};
        user.email = email;
        user.firstName = firstName;
        user.lastName = lastName;
        user.password = password;

        this.users.push(user);
    }

    // Add some default users
    this.addUser('Ben@yahoo.com', 'Ben', 'Barela', '123abc');
    this.addUser('Hector@gmail.com', 'Hector', 'Flores', 'abc123');
    this.addUser('default', 'Please log in', '', '');

    // Used to search for a user via email
    this.findUser = function (email) {
        for (var i = 0, len = this.users.length; i < len; i++) {
            if (this.users[i].email.toLowerCase() === email.toLowerCase()) {
                return this.users[i];
            }
        }
        return null;
    }


    // Change who is logged in
    this.setCurUser = function (user) {
        this.currentUser = user;
    }

    this.getCurUser = function () {
        return self.currentUser;
    }

    this.login = function (email, password) {
        user = this.findUser(email);

        if (user != null && user.password === password) {
            this.setCurUser(user);
        } else {
            console.log("Invalid login info");
        }
        
    }



    this.default = function () {
        this.setCurUser(this.findUser('default'));
        console.log(this.getCurUser())
    }

    // init to default user
    count = 0;
    if (count == 0) {
        count++;
        console.log("Init to default user");
        this.default();
    }

    this.isLoggedIn = function () {
        if (this.getCurUser().email === 'default') {
            return false;
        } else {
            return true;
        }
    }

});
