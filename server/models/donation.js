const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
	
	agent: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
	},
	donor: {
		type: String,
	},
	type: {
		type: String,
	},
	quantity: {
		type: String,
	},
	pickupTime: {
		type: Date,
	},
	address: {
		type: String,
	},
	phone: {
		type: Number,
	},
	donorToAgentMsg: String,
	collectionTime: {
		type: Date,
	},
	status: {
		type: String,
		enum: ["pending", "rejected", "accepted", "assigned", "collected"],
	},
});

const Donation = mongoose.model("donations", donationSchema);
module.exports = Donation;