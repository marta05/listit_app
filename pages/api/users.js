const argon2 = require('argon2');

const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5, // default: 3
    parallelism: 1 // default
};

const hashPassword = (password) => {
    const hashedPassword = argon2.hash(password, hashingOptions);
    return hashedPassword;
}

const verifyPassword = (plainPassword, hashedPassword) => {
    const verifiedPassword = argon2.verify(hashedPassword, plainPassword, hashingOptions);
    return verifiedPassword;
}

module.exports = {hashPassword, verifyPassword}

