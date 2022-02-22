import db from '../../lib/db'; 
const {hashPassword, verifyPassword, validateInput} = require('../../lib/password')

export default async function handler(req, res){
  if(req.method === "POST"){
    const {email, password} = req.body
    const validationError = validateInput(email, password)

    try{
      if(validationError){
        res.status(422).send(`Invalid input ${validationError}`)
      } else {
        const hashedPassword = await hashPassword(password).then((hashedPassword)=> {return hashedPassword})
        const result =  await db.query(`INSERT INTO "user" ( email, hashed_password) VALUES ($1, $2) RETURNING *`, [email, hashedPassword])
        .then((data)=> {
          if(data.rows.length > 0){
            res.status(201).send("user created")
          }
          else(res.status(500).send('not working'))}
        )
      }
    }
    catch(err){
      console.log('Error', err)
    }
  }
}