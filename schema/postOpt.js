const postOpts = {
schema:{
    body:{
        type: 'object',
        properties:{
            name:{ type: 'string' },
            status:{ type: 'string'}
            }
        },
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

module.exports = postOpts;