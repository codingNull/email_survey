import fields from "./formField";

export const validate = (values) => {
  const errors = {};

  if (values.recipients) {
    const emailList = values.recipients.split(",");
    const invalidEmails = emailList.filter((email) => {
      return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.trim());
    });
    if (invalidEmails.length > 0) {
      errors.recipients = `these emails are invalid: ${invalidEmails}`;
    }
  }

  fields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = "required";
    }
  });

  return errors;
};
