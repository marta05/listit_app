const argon2 = require('argon2');
const Joi = require('joi');

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

const validateInput = (userName, email, password) => {
    const { error } = Joi.object({
        userName: Joi.string().max(255).required(),
        email: Joi.string().email().max(255).required(),
        password: Joi.string().min(8)
    }).validate({ userName, email, password }, { abortEarly: false });
    return error
}

module.exports = {hashPassword, verifyPassword, validateInput}

