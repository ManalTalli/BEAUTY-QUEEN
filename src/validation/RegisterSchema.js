import * as yup from 'yup';

export const registerSchema = yup.object({
  userName: yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username cannot exceed 20 characters")
    .matches(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),

  fullName: yup.string()
    .required("Full name is required")
    .min(3, "Please enter your full name")
    .matches(/^[a-zA-Z\s]+$/, "Full name must only contain letters"),

  email: yup.string()
    .email("Invalid email format")
    .required("Email is required"),
    

  phoneNumber: yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .min(9, "Phone number is too short")
    .max(15, "Phone number is too long"),

  password: yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[@$!%*?&]/, "Password must contain at least one special character")


});