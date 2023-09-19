import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Name is required')
    .min(2, 'name must be at least 2 characters'),
  size: yup.object(),
  sausage: yup.boolean(),
  anchovies: yup.boolean(),
  ham: yup.boolean(),
  spinach: yup.boolean(),
  special: yup
    .string()
    .trim()
    .min(2, 'special instructions must be at least 2 characters'),
});

export default formSchema;
