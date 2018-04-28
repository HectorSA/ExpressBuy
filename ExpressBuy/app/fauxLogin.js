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
            if (this.users[i].email.toLowerCase() === email) {
                console.log('Match!!');
                return this.users[i];
            }
        }
        return null;
    }


    // Change who is logged in
    this.setCurUser = function (user) {
        this.currentUser = user;
        console.log(user)
    }

    this.getCurUser = function () {
        return self.currentUser;
    }

    // Default no one is logged in
    this.setCurUser(this.findUser('default'));
    console.log(this.getCurUser())


});
