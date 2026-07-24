const { cookies } = require("next/headers");

function login(){
    //session id
    // setcookie
    const sessionID='FakeId123456';
    document.cookies=`sessionId:${sessionID}; path=/`

}

function isAuthenticated(){}

function logout(){}

function getSession(){}