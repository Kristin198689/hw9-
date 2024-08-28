import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './DynamicForm.module.css';

const DynamicForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = data => {
    console.log(data);
  };

  // Watch the value of the first input field
  const firstFieldValue = watch("firstField", "");

  // Check if the first field value meets the validation criteria
  const isFirstFieldValid = firstFieldValue.length >= 5;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="firstField" className={styles.label}>First Field</label>
        <input 
          id="firstField" 
          className={styles.input} 
          {...register("firstField", { required: true, minLength: 5 })}
        />
        {errors.firstField && <p className={styles.error}>This field is required and must have at least 5 characters</p>}
      </div>
      
      {isFirstFieldValid && (
        <div className={styles.formGroup}>
          <label htmlFor="secondField" className={styles.label}>Second Field</label>
          <input 
            id="secondField" 
            className={styles.input} 
            {...register("secondField", { required: true })}
          />
          {errors.secondField && <p className={styles.error}>This field is required</p>}
        </div>
      )}
      
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
};

export default DynamicForm;