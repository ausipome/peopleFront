'use client';

import {useState, useEffect} from 'react';

interface Person {
  firstName: string;
  surname: string;
  age: number;
  hasCat: boolean;
  hasDog: boolean;
}

export default function People() {

  const [people, setPeople] = useState<Person[]>([]);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

const getPeople = async () => {
  try {
    const res = await fetch('/api/people');
    const data = await res.json();
    setPeople(data);
  } catch (error) {
    setLoading(false);
    setError(true);
  } finally {
    setLoading(false);
  }
}

useEffect(() => {
  getPeople();

  return () => {
    //cleanup
}
}, []);

const filteredPeople = people.filter((person) =>
    person.surname.toLowerCase().includes(search.toLowerCase())
  );

    return (
      <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-lg mt-6 mb-6">
       { /* search by surname */ }
       <div className='mt-4 mb-4'>
        <input type="text" 
        placeholder="Search by surname" 
        className="border-2 border-gray-400 p-2 rounded-lg w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
        </div>
        {loading && <div>Loading...</div>}
        {error && <div className="text-red-600 mt-2">Error loading data</div>}
        <ul>
        {filteredPeople.map((person, index) => (
          <li className='border-b-2 border-t-2 pt-2 pb-2' key={index}>
            <h2 className="text-xl font-bold underline text-center text-red-500">{person.firstName} {person.surname}</h2>
            <p>Age: {person.age}</p>
            <p>Cat: {person.hasCat ? 'Yes' : 'No'}</p>
            <p>Dog: {person.hasDog ? 'Yes' : 'No'}</p>
          </li>
        ))}
        </ul>
      </div>
    );
  }