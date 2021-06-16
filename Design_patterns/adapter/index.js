let localStorage = require('./local.storage')

console.log('localStorage lenght', localStorage.length)

let uid = localStorage.getItem("user_id")

console.log('user_id', uid)

if (!uid) {
    console.log('user id not found. Setting the user id and token ..')
    localStorage.setItem("token", "asddfjkfddfkdfbsduiasnsdf42sdf45sd")
    localStorage.setItem("user_id", "1234")

} else {
    console.log('User id found', uid)
    console.log('clearning the user id ')
    localStorage.clear()
}