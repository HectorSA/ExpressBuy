indexApp.service('fauxLogin', function () {
    var self = this;
    this.customerFirstName = 'Ben';
    this.customerLastName = 'Barela';
    this.email = 'BenBen@yahoo.com';
    this.password = '123abc';
    this.namelength = function () {
        return self.name.length;
    };
});
