const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const LotSchema = new Schema({
  lot_id: {
    type: Number,
    required: true,
    unique: true
  },
  capacity: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  }
});
//auto increment  lot_id
LotSchema.pre("validate", function(next) {
  var doc = this;
  doc.createdAt = new Date();
  Lot.findOne({}, null, { sort: { createdAt: -1 } }, function(error, latest) {
    if (error) return next(error);
    if (!latest) {
      doc.lot_id = 1;
    } else {
      doc.lot_id = latest.lot_id + 1;
    }
    next();
  });
});

module.exports = Lot = mongoose.model("lot", LotSchema);
