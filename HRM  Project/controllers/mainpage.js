exports.signuppage = (request, response, next) => {
    response.sendFile('dashboard.html', { root: 'views' });

}

exports.getloginpage = (request, response, next) => {
    response.sendFile('signup.html', { root: 'views' });
}