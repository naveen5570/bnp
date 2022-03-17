import initDB from '../../helpers/initDB'
import Product from '../../models/Product'

export default async(req, res) => {
    try{
        //console.log('test=>'+req.query.name);
        //var query = {name:req.query.name};
      const products =  await Product.find()
      res.status(200).send(products)
    }catch(err){
      console.log(err)
    }
  }
  