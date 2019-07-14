const Lot = require("../../models/Lot");
const Slot = require("../../models/Slot");

async function createLot(req, res, next) {
  try {
    console.log(req.body);
    const capacity = req.body.capacity;
    const lot = new Lot({
      capacity
    });

    const result = await lot.save();

    const slots = [];

    for (let i = 1; i <= capacity; i++) {
      slots.push({
        slot_no: i,
        lot_id: result.lot_id,
        is_empty: true
      });
    }
    await Slot.insertMany(slots); //  adding slots behind the scene

    return res.status(200).json({
      result
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

module.exports = {
  create: createLot
};
