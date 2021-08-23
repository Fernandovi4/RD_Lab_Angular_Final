const mongoose = require('mongoose');

const Game = mongoose.model('Game', {
  id: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  isMygame: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    default: 100,
  },
  description: {
    type: String,
    default: null,
  },
  logs: {
    type: Array,
  },
});

module.exports = {Game};
