// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
    console.log(customerName)
    return customerName;
}

// upperCaseCustomerName(customerName)

function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'Poop head'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Doodoo head'
    console.log(leastFavoriteCustomer)
}

changeLeastFavoriteCustomer()
