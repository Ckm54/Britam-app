import React from "react";

interface ObjectProp {
  [key: string]: any;
}

export const useFormData = (values: ObjectProp) => {
  const [formValues, setFormValues] = React.useState({
    ...values,
  });

  const handleFormValueChange = (key: string, value: string) => {
    setFormValues({
      ...formValues,
      [key]: value,
    });
  };

  return { formValues, handleFormValueChange, setFormValues };
};
