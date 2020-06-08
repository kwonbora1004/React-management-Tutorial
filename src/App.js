import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from "./components/Customer"

const customers = [{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'홍길동',
  'birthday':'930121',
  'gender':'여자',
  'job':'학생'

},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'홍길동',
  'birthday':'950212',
  'gender':'여자',
  'job':'학생'

},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'홍길동',
  'birthday':'960112',
  'gender':'여자',
  'job':'프로그래머'

}
]
function App() {
  return (
    <div>
    
    {
      customers.map(c =>{ return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthdat={c.birthday}
         gender={c.gender} job={c.job} />)})
    }
    </div>
  );
}

export default App;