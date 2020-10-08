const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    createdBy: {type: String, required: true},
    groupName: {type: String, required: true}, 
    groupParticipantsInvited: {type: String, required: true},
    groupParticipantsPending: {type: String},
    groupParticipantsAccepted: {type: String},
    groupParticipantsRejected: {type: String},
    groupDescription: {type: String, required: true},
    createdAt: {type: Date, default: Date.now },
    
});

module.exports = mongoose.model('Group', GroupSchema);