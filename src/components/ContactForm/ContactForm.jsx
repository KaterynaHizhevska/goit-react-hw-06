import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

function ContactForm() {
  const dispatch = useDispatch();

const orderSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Мінімум 3 символи')
      .max(50, 'Максимум 50 символів')
      .required('Необхідно заповнити'),
    number: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, 'Недійсний номер телефону')
      .min(3, 'Мінімум 3 цифри')
      .max(50, 'Максимум 50 цифр')
      .required('Необхідно заповнити'),
  });


const handleForm = (values, options) => {
    dispatch(addContact({ id: nanoid(), ...values }));
    options.resetForm();
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleForm} validationSchema={orderSchema}>
      <Form className={s.form}>
        <label className={s.label}>
          Ім'я
          <Field className={s.input} name="name" placeholder="name" />
          <ErrorMessage className={s.error} name="name" component="p" />
        </label>
        <label className={s.label}>
          Номер телефону
          <Field className={s.input} name="number" placeholder="number" />
          <ErrorMessage className={s.error} name="number" component="p" />
        </label>
        <button className={s.button} type="submit">Відправити</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;