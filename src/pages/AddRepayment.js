import React, { useContext, useState } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { BorrowersContext } from '../contexts/BorrowersContext';
 

const AddRepayment = () => {

    const navigate = useNavigate();

    const { person, handleRepayment } = useContext(BorrowersContext);

    const options = { maximumFractionDigits: 2 };


    const [ amount, setAmount ] = useState(0);
    const [ reme, setReme ] = useState("Cash");
    const [ collect, setCollect ] = useState();
    const [ by, setBy ] = useState("Issa Kombo");


    const { first, last, unique, 
      principal, release, interest
    
    } = person;

    var day = moment(release).add(0, "day").format("DD/MM/YYYY");


    var obj = { amount, reme, collect, by, first, last, unique };

    console.log(obj);

    const handleSubmit = () => {
        console.log("Handle submit from add payment");
        handleRepayment(first, obj);
        navigate("/singleLoan");
        window.scrollTo({
            top: 0,
            bahavior: 'smooth' 
        })
    }


    return (
        <section className='view-detail addnewborrower addRepay'>
           <h1>Add Repayment</h1>

           <div className='info'>
             <div className='header'>
                <h4>Loan#</h4>
                <h4>Released</h4>
                <h4>Maturity</h4>
                <h4>Principal</h4>
                <h4>Interest Rate</h4>
                <h4>Interest</h4>
                <h4>Penalty</h4>
                <h4>Due</h4>
                <h4>Paid</h4>
                <h4>Balance</h4>
                <h4>Status</h4>
             </div>

             <div className='data'>
                <h4>{unique}</h4>
                <h4>{release}</h4>
                <h4>{day}</h4>
                <h4>{Intl.NumberFormat("en-US", options).format(principal)}.00</h4>
                <h4>{interest}%/Month</h4>
                <h4 className='interest'>{Intl.NumberFormat("en-US", options).format(interest * principal/100)}.00</h4>
                <h4 className='penalty'>0</h4>
                <h4>0</h4>
                <h4 className='balance'>{Intl.NumberFormat("en-US", options).format(interest * principal/100 + parseInt(principal))}.00</h4>
                <h4 className='balance'>{Intl.NumberFormat("en-US", options).format(interest * principal/100 + parseInt(principal))}.00</h4>
                <div className='current'>Current</div>
             </div>
{/* 
             <div className='over'>
                <h5>Overide</h5>
                <h5 className='adjust'>Adjust in middle</h5>
                <h5 className='overide'>Overide</h5>
                <h5 className='make'>Make it zero</h5>
             </div> */}
           </div>
{/* 
           <div className='pend'>
            <FaArrowDown className='down'/>
            <span> Auto fill form with: </span>
            <BiPlusMedical className='plus'/>
            <p> Pending due untill Today </p>
            <BiPlusMedical className='plus'/>
            <p> Last Installment </p>
            <BiPlusMedical className='plus'/>
            <p> Total Balance </p>
            <BiPlusMedical className='plus'/>
            <p> Last Amount Entered </p>
           </div> */}

                {/* <div className='sho'>Required Fields:</div> */}



                <form onSubmit={handleSubmit}>
                
                    <label>Repayment Amount</label>
                    <input 
                      type='number'
                      placeholder='Number or decimal only'
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />

                    <label>Repayment Method</label>
                    <select
                      onChange={(e) => setReme(e.target.value)}
                    >
                        <option>Cash</option>
                        <option>ATM</option>
                        <option>Cheque</option>
                        <option>Paypal</option>
                        <option>Online Transfer</option>
                    </select>

                     <label>Collection Date</label>
                        <input  
                           type='date' 
                           placeholder='Number or decimal only'
                           onChange={(e) => setCollect(e.target.value) }
                           />                    

                

                    <label>Collected By</label>
                        <select
                          onChange={(e) => setBy(e.target.value)}
                        >
                            <option>Issa</option>
                        </select>

                   

                    <button type='submit'>Add Repayment</button>
                    
                </form>
            

            
        </section>
    )
}

export default AddRepayment;