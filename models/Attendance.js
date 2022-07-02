const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  punchIn: {
    type: boolean,
    default: false
  },
  punchOut: {
    type: boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  punchInTime: {
    type: Date,
    default: null
  },
  punchOutTime: {
    type: Date,
    default: null
  }
});

const Attendance = mongoose.model('Attendance', AttendanceSchema);

module.exports = Attendance;