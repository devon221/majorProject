import React  , {useState} from 'react'
import refurb from "../laptop/refurb"
import newitems from '../laptop/newitems'
import './Home.css';
const Home = () => {
    const [cond , setCond] = useState('');
    const [budget , setBudget] = useState(0);
    const [brand , setBrand] = useState('');


    


    return (
        <div className='main-container'>
            <div className='filter-container'>
                 <div className='filter-box'>
                    Condition
                    <form>
                    <input type='radio' name='condition' value='refurb' onChange={e=>setCond(e.target.value)} />Refurbished
                    <input type='radio' name='condition' value='new' onChange={e=>setCond(e.target.value)} />New
                    </form>
                    
                 </div>
                 <div className='filter-box'>
                    Brands
                    <form>
                    <input type='radio' name='condition' value='Lenovo' onChange={e=>setBrand(e.target.value)} />Lenovo
                    <input type='radio' name='condition' value='Acer' onChange={e=>setBrand(e.target.value)} />Acer
                    </form>
                    
                 </div>
                 <div className='filter-box'>
                    Budget
                    <form>
                    <input type='radio' name='condition' value='3' onChange={e=>setBudget(e.target.value)} />Above 30k
                    <input type='radio' name='condition' value='2' onChange={e=>setBudget(e.target.value)} />below 30k
                    <input type='radio' name='condition' value='1' onChange={e=>setBudget(e.target.value)} />below 20k
                    </form>
                 </div>
            </div>

             

            <div className='product-container'>
            <h1>Refurbished</h1>
                <div className='refurb-container'>
                    
                {refurb.map((laptop, index) => (
                        <div key={index} className='laptop-item'>

                            <h3>{laptop.name}</h3>
                            <p>Price: {laptop.budget}</p>
                            
                        </div>
                    ))}
                </div>
                <h1>New</h1>
                <div className='refurb-container'>
                    
                {newitems.map((laptop, index) => (
                        <div key={index} className='laptop-item'>

                            <h3>{laptop.name}</h3>
                            <p>Price: {laptop.budget}</p>
                            
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Home