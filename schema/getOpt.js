const getOpts = {
    schema:{
        response:{
            200:{
                type:'object',
                properties:{
                    _id: { type: 'string' },
                    isbn: { type: 'number' },
                    name: { type: 'string' },
                    status: { type: 'string' },
                    created_at: { type: 'string'},
                    updated_at: { type: 'string'}
                }
                
            }
        }
    }
}

const getOptsMany = {
    schema:{
        response:{
            200:{
                type:'array',
                items:{
                    type:'object',
                    properties:{
                        _id: { type: 'string' },
                        isbn: { type: 'number' },
                        name: { type: 'string' },
                        status: { type: 'string' },
                        created_at: { type: 'string'},
                        updated_at: { type: 'string'}
                    }
                }
            }
        }
    }
}
module.exports = {getOpts, getOptsMany };

// const opts = 
// {
//   schema: {
//     querytring:{
//       age: {type:'number'}
//     },
//     body:{
//       type: 'object',
//       properties:{
//         keshavNayak:{type: 'number'},
//       }
//     },
//     response: {
//       200: {
//         type: 'object',
//         properties: {
//           name: { type: 'string' }
//         }
//       }
//     }
//   }
// }

