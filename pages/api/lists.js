import db from '../../lib/db';

export default function handler(req, res){
  if(req.method === "GET"){
    const {userId} = req.query

    db.query('SELECT "list".id as list_id, "list".name as list_name, "user".id as user_id, "user".name as user_name FROM "list" LEFT JOIN "user" ON "user".id = "list".user_id WHERE user_id = $1',[userId],(err, result) => {
      if(err){
        res.status(500).json({message: 'Error getting lists' + err})
      } else {
        res.status(200).send(result.rows)
        // console.log(result.rows)
      }
    })
  }

  if(req.method === "POST"){
    const {userId, listName} = req.body;

    db.query('INSERT INTO "list" (name, user_id) VALUES ($1, $2) RETURNING *', [listName, userId], (err, result)=>{
      if(err){
        res.status(500).json({message: "Error posting the list" + err})
      } else {
        const id = result.rows[0].id
        res.status(201).send({id, listName, userId})
      }
    })
  }

  if(req.method === "PUT"){
    const {listId, listName} = req.body;

    db.query('UPDATE "list" SET name = $1 WHERE id $2 RETURNING *', [listName, listId], (err, result)=>{
      if(err){
        res.status(500).json({message: "Error updating the list" + err})
      } else {
        res.status(200).send(result.rows)
      }
    })
  }

  if(req.method === "DELETE"){
    const {listId} = req.body;
    console.log(listId)

    db.query('DELETE FROM "item" WHERE "item".list_id = $1', [listId], (err, result)=>{
      if(err){
        res.status(500).json({message: "Error deleting the list" + err})
      } else {
        db.query('DELETE FROM "list" WHERE "list".id = $1', [listId], (err, result)=>{
          if(err){
            res.status(500).json({message: "Error deleting the list" + err})
          } else {
            res.status(200).send({message: "List deleted", listId})
          }
        })
      }
    })}
}
