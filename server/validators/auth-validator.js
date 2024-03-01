const { z } = require('zod');

const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is Required" })
        .trim()
        .email({ message: "Invalid Email Address" })
        .min(7, { message: "Email must be atleast of 7 characters" })
        .max(255, { message: "Name must not be more that 255 characters" }),

    password: z
        .string({ required_error: "Password is Required" })
        .trim()
        .min(10, { message: "Password must be atleast of 10 characters" })
        .max(12, { message: "Password must not be more that 12 characters" })
})
const signupSchema = loginSchema.extend({
    username: z
        .string({ required_error: "Name is Required" })
        .trim()
        .min(3, { message: "Name must be atleast of 3 characters" })
        .max(255, { message: "Name must not be more that 255 characters" }),
        phone: z
            .string({ required_error: "Phone is Required" })
            .trim()
            .min(10, { message: "Phone must be atleast of 10 characters" })
            .max(12, { message: "Phone must not be more that 12 characters" }),

})

module.exports = { signupSchema,loginSchema }