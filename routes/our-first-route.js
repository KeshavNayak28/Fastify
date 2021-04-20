const {getOpts, getOptsMany} =  require('../schema/getOpt')
const postOpts = require('../schema/postOpt')
const putOpts = require('../schema/putOpt')
const deleteOpts = require('../schema/deleteOpt')

async function routes (fastify, options, done){

  const database = fastify.mongo.db('fast');
  const collection = database.collection('fastify');

  fastify.decorate('auth', (request) => request.headers.auth === 'secret');

  fastify.get('/', getOptsMany, async (request, reply) => {
      const get_datas = await collection.find().toArray();
      return get_datas;
    })

    fastify.get('/:isbn',getOpts, async (request,reply) => {
      const isbn = request.params.isbn;
      const get_data = await collection.findOne({ isbn :parseInt(isbn)});
      if (get_data != null){
        return get_data;
      }
      const err = new Error();
      err.statusCode = 400;
      err.message = `data with isbn ${isbn} doesnt exist`
      return err
    })

    fastify.post('/', postOpts, async (request, reply) => {
      if (!fastify.auth(request)){
        const err = new Error();
        err.statusCode = 401;
        err.message = 'not authorized';
        return err
      }
      const post_data = request.body;
      post_data.created_at = new Date();
      post_data.updated_at = new Date();
      const result = await collection.insertOne(post_data);
      return result.ops[0];
    })

    fastify.put('/:isbn', putOpts, async (request, reply) => {
        const isbn = request.params.isbn;
        const body_data = request.body;
        body_data.updated_at = new Date();
        const update_data = await collection.findOneAndUpdate({"isbn":parseInt(isbn)}, { $set: body_data });
        if (update_data.value != null){
          return update_data.value
        }
        // const err = new Error();
        err.statusCode = 400;
        err.message = `data with isbn ${isbn} doesnt exist`;
        return err
    })

    fastify.delete('/:isbn', deleteOpts, async (request, reply) => {
      const isbn = request.params.isbn;
      const result = await collection.deleteOne({ isbn :parseInt(isbn) });
      if (result.deletedCount == 1){
        return { status: true }
      }
      const err = new Error();
      err.statusCode = 400;
      err.message = `data with isbn ${isbn} doesnt exist`;
      return err   
    })


    done()
}

module.exports = routes