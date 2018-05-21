db.createCollection('sample', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['message', 'status'],
      properties: {
        message: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        status: {
          enum: ['READ', 'UNREAD'],
          description: 'can only be one of the enum values and is required'
        }
      }
    }
  }
});
