'use client';

import {useState} from 'react';
import useForm from '@/hooks/UseForm';

interface Person {
    firstName: string;
    surname: string;
    age: number;
    hasCat: boolean;
    hasDog: boolean;
  }


export default function AddPeople() {
   // Call the useFormFields hook to initialize form state
  const { firstName, surname, age, hasCat, hasDog } = useForm<Person>({
    firstName: '',
    surname: '',
    age: '',
    hasCat: false,
    hasDog: false,
  });
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Access form field values from the hook
    console.log('First Name:', firstName.value);
    console.log('Surname:', surname.value);
    console.log('Age:', age.value);
    // You can submit the form data or perform any other action here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={firstName.value} onChange={(e) => firstName.onChange(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={surname.value} onChange={(e) => surname.onChange(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={age.value} onChange={(e) => age.onChange(e.target.value)} />
      </label>
        <label>
            <input type="checkbox" checked={hasCat.value} onChange={(e) => hasCat.onChange(e.target.checked)} />
            Has a cat
        </label>
        <label>
            <input type="checkbox" checked={hasDog.value} onChange={(e) => hasDog.onChange(e.target.checked)} />
            Has a dog
        </label>
      <button type="submit">Submit</button>
    </form>
  );
};