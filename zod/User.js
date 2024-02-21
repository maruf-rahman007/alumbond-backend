const zod = require("zod");

const nameSchema = zod.string()
  .refine((name) => /^[a-zA-Z0-9\s]+$/.test(name.trim()), {
    message: "Name must only contain letters, numbers, and spaces"
  })
  .refine((name) => name.trim().length > 0, {
    message: "Name cannot be empty"
  });

const emailSchema = zod.string().email().refine((email) => email.endsWith('diu.edu.bd'), {
  message: "Email must end with 'diu.edu.bd'"
});
const passwordSchema = zod.string().min(8);


module.exports = {
    nameSchema,
    emailSchema,
    passwordSchema,
  };
