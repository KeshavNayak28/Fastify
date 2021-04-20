const deleteOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    status: { type : 'boolean'}
                }
            }
        }
    }
}

module.exports = deleteOpts