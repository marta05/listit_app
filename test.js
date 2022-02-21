const { hashPassword, verifyPassword } = require("./pages/api/users")

hashPassword('myPlainPassword').then((hashedPassword)=>{
    console.log(hashedPassword)
})

verifyPassword('myPlainPassword', '$argon2id$v=19$m=65536,t=5,p=1$umv1bPLCTphyiclXuWBDcQ$dsED+lRpzROEmkelmu5xDs5J4dZGVA26vBe2ob5ynZI')
.then((results)=>{
    console.log(results)
})