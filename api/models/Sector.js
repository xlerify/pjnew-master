/**
 * Sector.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    // Sector
    attributes: {
        name: {
            type: 'string',
            required: true,
            unique: true
        },
        description: {
            type: 'string'
        },
        provinces: {
            collection: 'province',
            via: 'sector'
        }
        status: {
            type: 'string',
            defaultsTo: '1',
            required: true
        }
    },

};
