import db from '../../lib/db'; 
const {hashPassword, verifyPassword, validateInput} = require('../../lib/password')

export default async function handler(req, res){
  if(req.method === "POST"){
    const {userName, email, password} = req.body
    const validationError = validateInput(userName, email, password)

    try{
      if(validationError){
        res.status(422).send(`Invalid input ${validationError}`)
      } else {
        const hashedPassword = await hashPassword(password).then((hashedPassword)=> {return hashedPassword})
        const result =  await db.query(`INSERT INTO "user" (user_name, email, hashed_password) VALUES ($1, $2, $3) RETURNING *`, [userName, email, hashedPassword])
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