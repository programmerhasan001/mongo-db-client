import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name,
      email,
    };


    if (name && email) {
      fetch('http://localhost:3001/users', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setName("");
          setEmail("");
          alert("Data submitted successfully!!");
        });
    } else {
      alert('please fill-up the form and submit');
    }

  }
  // Send form data to the backend
  //   try {
  //     const response = await axios.post('http://localhost:3001/products', JSON.stringify(data),
  //       {
  //         headers: {
  //           'Content-Type': 'application/json;charset=UTF-8',
  //         }
  //       }
  //     );
  //     console.log(response.data);
  //     // Handle success response
  //   } catch (err) {
  //     console.error(err);
  //     // Handle error response
  //   }
  // };



  return (
    <div className='w-25 mx-auto mt-5 border border-success rounded p-5'>
      <h2 className='fs-3 border-bottom pb-2 border-success'>Submit Form data By node js</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input className='w-100' type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>
        <label>
          Email:
          <input className='w-100' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <div className='mt-2'>
          <button className='btn btn-success' type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
