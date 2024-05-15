'use client';

import { useState, ChangeEvent } from 'react';

type FormFields = {
  [key: string]: string;
};

type FormErrors = {
  [key: string]: string;
};

type useFormReturnType = {
  formData: FormFields;
  formErrors: FormErrors;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  validateField: (fieldName: string) => void;
  validateForm: () => boolean;
};

const useForm = (initialState: FormFields): useFormReturnType => {
  const [formData, setFormData] = useState<FormFields>(initialState);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: '', // Clear the error when the field value changes
    });
  };

  const validateField = (fieldName: string) => {
    // Validation logic for specific field
    // For example, required field validation
    if (!formData[fieldName]) {
      setFormErrors({
        ...formErrors,
        [fieldName]: 'This field is required',
      });
    }
  };

  const validateForm = (): boolean => {
    let isValid = true;
    for (const fieldName in formData) {
      if (Object.prototype.hasOwnProperty.call(formData, fieldName)) {
        validateField(fieldName);
        if (formErrors[fieldName]) {
          isValid = false;
        }
      }
    }
    return isValid;
  };

  return { formData, formErrors, handleChange, validateField, validateForm };
};

export default useForm;
