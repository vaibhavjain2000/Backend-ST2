const mongoose = require("mongoose");
const validator = require("validator");
const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error("Email is invalid");
                }
            },
        },
        mobile: {
            type: Number,
            required: true,
            unique: true,
            trim: true,
            validate(value) {
                if(value.length > 10){
                    throw new Error("Phone number is Invalid")
                }
            }
        }
    },
    {
        timestamps: true
    }
)

contactSchema.methods.toJSON = function () {
    const contact = this;
    const contactObject = contact.toObject();
    return contactObject;
}
const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;