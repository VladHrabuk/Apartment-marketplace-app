export const requiredValidation = {
  required: 'This field is required',
};

export const maxLengthValidation = (max) => ({
  maxLength: {
    value: max,
    message: `Must be less than ${max} characters`,
  },
});

export const minLengthValidation = (min) => ({
  minLength: {
    value: min,
    message: `Must be over than ${min} characters`,
  },
});

export const minValueValidation = (min) => ({
  validate: (value) => {
    const numericValue = parseFloat(value);
    return numericValue >= min || `Must be greater than or equal to ${min}`;
  },
});

export const maxValueValidation = (max) => ({
  validate: (value) => {
    const numericValue = parseFloat(value);
    return numericValue <= max || `Must be less than or equal to ${max}`;
  },
});

export const minMaxValueValidation = (min, max) => ({
  validate: (value) => {
    const numericValue = parseFloat(value);
    return (
      (numericValue <= max && numericValue >= min) ||
      `Must be between ${min} and ${max}`
    );
  },
});
