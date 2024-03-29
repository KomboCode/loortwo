import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import { CgShapeCircle } from 'react-icons/cg';
// import { FaRegEye, FaHome, FaDollarSign, FaPaypal, FaShare, FaPlus } from 'react-icons/fa';
// import { BsFillPersonFill, BsFileEarmarkSpreadsheet, BsBank2, BsFillPersonPlusFill, BsGraphUpArrow } from 'react-icons/bs';
// import { GiThorHammer } from 'react-icons/gi';
// import { VscLaw } from 'react-icons/vsc';
// import { AiOutlineBars } from 'react-icons/ai';
// import { LuCalendarDays, LuSettings2 } from 'react-icons/lu';
// import { BiBriefcaseAlt, BiSolidBriefcaseAlt2 } from 'react-icons/bi';
// import { SiBookstack } from 'react-icons/si';
// import { MdOutlineKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCircle, faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faAngleLeft, faAngleRight, faBookOpen, faBriefcase, faBuildingColumns, faDollar, faGavel, faHouse, faLink, faList, faPlus, faReceipt, faScaleBalanced, faShare, faSuitcase, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { BorrowersContext } from '../contexts/BorrowersContext';




const Sidebar = () => {

   const { handlePopup } = useContext(BorrowersContext);


   const [ borrower, setBorrower ] = useState(false);
   const [ loan, setLoan ] = useState(false);
   const [ repay, setRepay ] = useState(false);
   const [ sheet, setSheet ] = useState(false);
   const [ save, setSave ] = useState(false);
   const [ trans, setTrans ] = useState(false);
   const [ invest, setInvest ] = useState(false);
   const [ account, setAccount ] = useState(false);
   const [ pay, setPay ] = useState(false);
   const [ expense, setExpense ] = useState(false);
   const [ other, setOther ] = useState(false);
   const [ asset, setAsset ] = useState(false);
   const [ report, setReport ] = useState(false);
   const [ accounting, setAccounting ] = useState(false);
   const [ reduce, setReduce ] = useState(false);

   const handleBorrowers = () => {
      setBorrower(!borrower);
   }

   
   const handleLoan = () => {
      setLoan(!loan);
   }
   
   const handleRepay = () => {
      setRepay(!repay);
   }

   
   const handleSheet = () => {
      setSheet(!sheet);
   }

   
   const handleSave = () => {
      setSave(!save);
   }

   
   const handleTrans = () => {
      setTrans(!trans);
   }
   
   const handleInvest = () => {
      setInvest(!invest);
   }
   
   const handleAccount = () => {
      setAccount(!account);
   }

   
   const handlePay = () => {
      setPay(!pay);
   }

   
   const handleExpense = () => {
      setExpense(!expense);
   }

   
   const handleOther = () => {
      setOther(!other);
   }

   const handleAsset = () => {
      setAsset(!asset);
   }

   
   const handleReport = () => {
      setReport(!report);
   }

   
   const handleAccounting = () => {
      setAccounting(!accounting);
   }


    return (
        <section  
           className='sidebar'
           style={
            reduce ? {
               width: "50px"
            } 
            : null
           }
           >
            {/* <div className='org'>
                <h1><span>Haves</span> Admin</h1>
            </div> */}
            <div>
                {/* <div className='profile'>
                    <div className='bg'>
                        <img alt='profile norms' src='./images/dp.png'/>
                    </div>
                    <h5>Issa Kombo</h5>
                </div> */}
                {/* <div className='eye'>
                    <FontAwesomeIcon icon={faEye} />
                    <h4 style={
                     reduce? {
                        display: "none"
                     } : null
                    }>View Another Branch</h4>
                </div> */}
            </div>

            <ul>
                {/* <li>
                   <FontAwesomeIcon icon={faCircle} className='icon blue' />
                   <h4 style={
                     reduce? {
                        display: "none"
                     } : null
                   }>Branch#1</h4>
                </li> */}

                  <FontAwesomeIcon 
                     icon={
                        reduce ? faAngleRight
                               : faAngleLeft
                     } 
                     className='reduce' 
                     onClick={() => setReduce(!reduce)}
                     style={
                        reduce ? {
                           left: "42px"
                        } : null
                     }
                     />
                  <Link to="/">
                     <li className='branch'>
                        <FontAwesomeIcon icon={faHouse} className='icon' />
                        <h4 style={
                           reduce? {
                              display: "none"
                           } : null
                        }>Home Branch</h4>
                     </li>
                    
                  </Link>

                <li
                    onClick={() => handleBorrowers()}
                    className={`${ reduce && "moja"} ${ borrower && "hover"}`}
                >
                   {/* <BsFillPersonFill className="icon"/> */}

                  <div 
                     // className='borrowers-hum'
                     className={`${ reduce && "borrowers-hum"}`}
                     style={
                        reduce ? {
                           opacity: 1
                        } : {
                           display: "none"
                        }
                     }
                  >
                  <ul>
                   
                  <Link to="/viewborrowers">
                           <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>View Borrowers</h5>
                           </li>
                         
                        </Link>

                     
                        <Link  
                           to="/addborr"
                           // onClick={() => handlePopup("addb")}
                           >
                           <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>Add Borrower</h5>
                           </li>
                        </Link>

                         <Link>
                           <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>View Borrower Groups</h5>
                           </li>
                     
                         </Link>

                     <Link>
                        <li>
                           <FontAwesomeIcon icon={faCircle} className='icon blue' />
                           <h5>Add Borrowers Group</h5>
                        </li>
                     </Link> 

                     <Link>
                        <li>
                           <FontAwesomeIcon icon={faCircle} className='icon blue' />
                           <h5>Send SMS to All Borrowe..</h5>
                        </li>
                     </Link>
                    
                  </ul>
                </div>


                   <FontAwesomeIcon icon={faUser} className='icon' />
                   <h4 style={
                     reduce? {
                        display: "none"
                     } : null
                   }>Borrowers</h4>
                   { borrower ? <FontAwesomeIcon 
                     icon={faAngleDown} 
                     className='left' 
                     style={
                        reduce ? {
                           display: "none"
                        } : null
                     }
                     />
                   :
                   <FontAwesomeIcon 
                      icon={faAngleRight} 
                      className='left' 
                      style={
                        reduce ? {
                           display: "none"
                        } : null
                     }
                      />
                   }
                   
                   
                </li>

                <div className="anga">
                  <ul 
                     className={`borrowers ${ borrower && "borrowers-toggle"}`}
                     style={
                        reduce ? {
                           display: "none"
                        } : null
                     }
                     >
                     
                        <Link to="/viewborrowers">
                           <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>View Borrowers</h5>
                           </li>
                         
                        </Link>

                     
                        <Link  
                           to="/addborr"
                           // onClick={() => handlePopup("addb")}
                           >
                           <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>Add Borrower</h5>
                           </li>
                        </Link>

                     <li>
                         <Link>
                           <FontAwesomeIcon icon={faCircle} className='icon blue' />
                           <h5>View Borrower Groups</h5>
                         </Link>
                      
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Add Borrowers Group</h5>
                     </li>

                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Send SMS to All Borrowe..</h5>
                     </li>
{/* 
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Send Email to All Borrowers</h5>
                     </li> */}

                  </ul>

                  
                </div>



                
                <li
                    onClick={() => handleLoan()}
                    className={`${ reduce && "moja"} ${ loan && "hover"}`}
                >

                
               <div 
                   className={`${ reduce && "loan-hum"}`}
                     style={
                        reduce ? {
                           opacity: 1
                        } : {
                           display: "none"
                        }
                     }
               >
                  <ul className={`borrowers ${ loan && "loan-toggle"}`}>
                        <Link to="/viewloans">
                           <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>View All Loans</h5>
                           </li>
                        </Link>

                       <Link 
                         to="/addloa"
                         onClick={() => handlePopup("addl")}
                         >
                          <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>Add Loans</h5>
                          </li>
                       </Link>

                        <Link to="/dueloan">
                           <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>Due Loans</h5>
                           </li>
                        </Link>


                         <Link to="/missedrepayment">
                           <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>Missed Repayments</h5>
                           </li>
                         </Link>
                   

                     <Link to="/loanarrear">
                        <li>
                           <FontAwesomeIcon icon={faCircle} className='icon blue' />
                           <h5>Loans in Arrays</h5>
                        </li>
                     </Link>
                   

                         <Link to="/norepayment">
                           <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>No Repayments</h5>
                           </li>
                         </Link>

                     
                         <Link to="/pamaturity">
                           <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>Past Maturity Date</h5>
                           </li>
                          
                         </Link>
                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                        <h5>Principal Outstanding</h5>
                     </li>
                     
                       <Link to="/onemonthlate">
                           <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>1 Month Late Loans</h5>
                           </li>
                       </Link>
                        
                        <Link to='/threemonthlate'>         
                           <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>3 Month Late Loans</h5>
                           </li>
                        </Link>
                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Loan Calculator</h5>
                     </li>
                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Guarantors</h5>
                     </li>

                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Loan Comments</h5>
                     </li>

                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Approve Loans</h5>
                     </li>


                  </ul>
                  
                </div>


                   <FontAwesomeIcon icon={faScaleBalanced} className='icon' />
                   <h4 style={
                     reduce? {
                        display: "none"
                     } : null
                   }>Loans</h4>
                   { loan ? <FontAwesomeIcon 
                     icon={faAngleDown} 
                     className='left' 
                     style={
                        reduce ? {
                           display: "none"
                        } : null
                     }  
                     />
                   :
                   <FontAwesomeIcon 
                      icon={faAngleRight} 
                      className='left' 
                      style={
                        reduce ? {
                           display: "none"
                        } : null
                     }
                      />
                   }
                </li>
                
                <div className="anga">
                  <ul 
                     className={`borrowers ${ loan && "loan-toggle"}`}
                     style={
                        reduce ? {
                           display: "none"
                        } : null
                     }
                  >
                        <Link to="/viewloans">
                           <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>View All Loans</h5>
                           </li>
                        </Link>

                       <Link 
                         to="/addloa"
                         onClick={() => handlePopup("addl")}
                         >
                          <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>Add Loans</h5>
                          </li>
                       </Link>

                        <Link to="/dueloan">
                           <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>Due Loans</h5>
                           </li>
                        </Link>


                         <Link to="/missedrepayment">
                           <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>Missed Repayments</h5>
                           </li>
                         </Link>
                   

                     <Link to="/loanarrear">
                        <li>
                           <FontAwesomeIcon icon={faCircle} className='icon blue' />
                           <h5>Loans in Arrays</h5>
                        </li>
                     </Link>
                   

                         <Link to="/norepayment">
                           <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>No Repayments</h5>
                           </li>
                         </Link>

                     
                         <Link to="/pamaturity">
                           <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>Past Maturity Date</h5>
                           </li>
                          
                         </Link>
                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                        <h5>Principal Outstanding</h5>
                     </li>
                     
                       <Link to="/onemonthlate">
                           <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>1 Month Late Loans</h5>
                           </li>
                       </Link>
                        
                        <Link to='/threemonthlate'>         
                           <li>
                              <FontAwesomeIcon icon={faCircle} className='icon blue' />
                              <h5>3 Month Late Loans</h5>
                           </li>
                        </Link>
                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Loan Calculator</h5>
                     </li>
                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Guarantors</h5>
                     </li>

                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Loan Comments</h5>
                     </li>

                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Approve Loans</h5>
                     </li>


                  </ul>
                  
                </div>

                <li
                    onClick={() => handleRepay()}
                    className={`${ reduce && "moja"} ${ repay && "hover"}`}
                >
                
                
                  <div 
                    className={`${ reduce && "repay-hum"}`}
                     style={
                        reduce ? {
                           opacity: 1
                        } : {
                           display: "none"
                        }
                     }
                    >
                  <ul className={`borrowers ${ repay && "repay-toggle"}`}>
                     <li >
                        <Link to="/viewrepayment">
                           <FontAwesomeIcon icon={faCircle} className='icon blue' />
                           <h5>View Repayments</h5>
                        </Link>
                     </li>
                     <li>
                        <Link to="/addbulkrepayments">
                           <FontAwesomeIcon icon={faCircle} className='icon blue' />
                           <h5>Add Bulk Repayments</h5>
                        </Link>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Upload Repayments-CSV</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Repayments Charts</h5>
                     </li>

                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Approve Repayments</h5>
                     </li>

                  </ul>
                  
                </div>



                   <FontAwesomeIcon icon={faDollar} className='icon' />
                   <h4 style={
                     reduce? {
                        display: "none"
                     } : null
                   }>Repayments</h4>
      
                   { repay ? <FontAwesomeIcon 
                      icon={faAngleDown} 
                      className='left'
                      style={
                        reduce ? {
                           display: "none"
                        } : null
                     }  
                      />
                   :
                   <FontAwesomeIcon 
                      icon={faAngleRight} 
                      className='left' 
                      style={
                        reduce ? {
                           display: "none"
                        } : null
                     }  
                      />
                   }
                   
                </li>

                
                <div className="anga">
                  <ul 
                     className={`borrowers ${ repay && "repay-toggle"}`}
                     style={
                        reduce ? {
                           display: "none"
                        } : null
                     }
                  >
                     <li >
                        <Link to="/viewrepayment">
                           <FontAwesomeIcon icon={faCircle} className='icon blue' />
                           <h5>View Repayments</h5>
                        </Link>
                     </li>
                     <li>
                        <Link to="/addbulkrepayments">
                           <FontAwesomeIcon icon={faCircle} className='icon blue' />
                           <h5>Add Bulk Repayments</h5>
                        </Link>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Upload CSV Repay..</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Repayments Charts</h5>
                     </li>

                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Approve Repayments</h5>
                     </li>

                  </ul>
                  
                </div>


                <li>
                   {/* <AiOutlineBars className="icon"/> */}
                   <FontAwesomeIcon icon={faList} className='icon' />
                   <h4 style={
                     reduce? {
                        display: "none"
                     } : null
                   }>Collateral Register</h4>
                </li>

                
                <li>
                   {/* <LuCalendarDays className="icon"/> */}
                   <FontAwesomeIcon icon={faCalendarDays} className='icon' />
                   <h4 style={
                     reduce? {
                        display: "none"
                     } : null
                   }>Calender</h4>
                </li>


                <li
                    onClick={() => handleSheet()}
                    className={`${ reduce && "moja"} ${ sheet && "hover"}`}
                >

                
               <div
                 className={`${ reduce && "sheet-hum"}`}
                     style={
                        reduce ? {
                           opacity: 1
                        } : {
                           display: "none"
                        }
                     }
               >
                  <ul className={`borrowers ${ sheet && "repay-toggle"}`}>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Daily Collection Sheet</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Missed Repayment Sheet</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Past Maturity Date Loans</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Send SMS</h5>
                     </li>

                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Send Email</h5>
                     </li>

                  </ul>
                  
               </div>


                
                   <FontAwesomeIcon icon={faFileAlt} className='icon' />
                   <h4 style={
                     reduce? {
                        display: "none"
                     } : null
                   }>Collection Sheets</h4>
                
                   
                   { sheet ? <FontAwesomeIcon 
                   icon={faAngleDown} 
                   className='left' 
                   style={
                        reduce ? {
                           display: "none"
                        } : null
                     }  
                   />
                   :
                   <FontAwesomeIcon 
                      icon={faAngleRight} 
                      className='left' 
                      style={
                        reduce ? {
                           display: "none"
                        } : null
                     }  
                      />
                   }
                   
                </li>

                <div className="anga">
                  <ul 
                    className={`borrowers ${ sheet && "repay-toggle"}`}
                    style={
                        reduce ? {
                           display: "none"
                        } : null
                     }  
                  >
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Daily Collection Sheet</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Missed Repayment Sheet</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Past Maturity Date Loans</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Send SMS</h5>
                     </li>

                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Send Email</h5>
                     </li>

                  </ul>
                  
                </div>

                

                
                <li
                    onClick={() => handleSave()}
                    className={`${ reduce && "moja"} ${ save && "hover"}`}
                >


               <div 
                 className={`${ reduce && "save-hum"}`}
                     style={
                        reduce ? {
                           opacity: 1
                        } : {
                           display: "none"
                        }
                     }
               >
                  <ul className={`borrowers ${ save && "save-toggle"}`}>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>View Savings Accounts</h5>
                     </li>

                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Add Savings Accounts</h5>
                     </li>

                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Savings Charts</h5>
                     </li>

                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Savings Report</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Savings Products Report</h5>
                     </li>

                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Savings Fee Report</h5>
                     </li>

                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Cash Safe Management</h5>
                     </li>

                  </ul>
                  
                </div>

                   {/* <BsBank2 className="icon"/> */}
                   <FontAwesomeIcon icon={faBuildingColumns} className='icon' />
                   <h4 
                   style={
                     reduce? {
                        display: "none"
                     } : null
                   }
                   >Savings</h4>
                   
                   { save ? <FontAwesomeIcon 
                   icon={faAngleDown} 
                   className='left' 
                     
                   />
                   :
                   <FontAwesomeIcon 
                     icon={faAngleRight} 
                     className='left' 
                     style={
                     reduce? {
                        display: "none"
                     } : null
                   }
                     />
                   }
                </li>


                <div className="anga">
                  <ul 
                     className={`borrowers ${ save && "save-toggle"}`}
                     style={
                     reduce? {
                        display: "none"
                     } : null
                   }
                  >
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>View Savings Accounts</h5>
                     </li>

                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Add Savings Accounts</h5>
                     </li>

                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Savings Charts</h5>
                     </li>

                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Savings Report</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Savings Products Report</h5>
                     </li>

                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Savings Fee Report</h5>
                     </li>

                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Cash Safe Management</h5>
                     </li>

                  </ul>
                  
                </div>


                <li
                    onClick={() => handleTrans()}
                    className={`${ reduce && "moja"} ${ trans && "hover"}`}
                >

                
               <div 
                     className={`${ reduce && "trans-hum"}`}
                     style={
                        reduce ? {
                           opacity: 1
                        } : {
                           display: "none"
                        }
                     }
               >
                  <ul className={`borrowers ${ trans && "repay-toggle"}`}>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>View Savings Transactions</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Add Bulk Transactions</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Upload Transactions-CSV file</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Staff Transactions Report</h5>
                     </li>

                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Approve Transactions</h5>
                     </li>
                  </ul>
                  
                </div>

                                
                   <FontAwesomeIcon icon={faLink} className='icon' />
                   <h4 
                     style={
                        reduce? {
                           display: "none"
                        } : null
                     }
                   >Savings Transaction</h4>
                   {/* { save ? <MdKeyboardArrowDown className="left"/>
                   :
                   <MdOutlineKeyboardArrowRight className='left'/> 
                   } */}

                   
                   { trans ? <FontAwesomeIcon 
                      icon={faAngleDown} 
                      className='left' 
                      style={
                        reduce? {
                           display: "none"
                        } : null
                     }
                      />
                   :
                   <FontAwesomeIcon 
                     icon={faAngleRight} 
                     className='left' 
                     style={
                        reduce? {
                           display: "none"
                        } : null
                     }
                     />
                   }
                </li>

                <div className="anga">
                  <ul 
                    className={`borrowers ${ trans && "repay-toggle"}`}
                    style={
                        reduce? {
                           display: "none"
                        } : null
                     }
                    >
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>View Savings Transactions</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Add Bulk Transactions</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Upload Transactions-CSV file</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Staff Transactions Report</h5>
                     </li>

                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Approve Transactions</h5>
                     </li>
                  </ul>
                  
                </div>

                
                
                <li
                    onClick={() => handleInvest()}
                    className={`${ invest && "hover"}`}
                >
                   {/* <BsFillPersonPlusFill className="icon"/> */}
                   <FontAwesomeIcon icon={faUserPlus} className='icon' />
                   <h4 style={
                     reduce? {
                        display: "none"
                     } : null
                   }>Investors</h4>
                 
                   
                   { invest ? <FontAwesomeIcon icon={faAngleDown} className='left' />
                   :
                   <FontAwesomeIcon icon={faAngleRight} className='left' />
                   }
                </li>


                <div className="anga">
                  <ul className={`borrowers ${ invest && "repay-toggle"}`}>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>View Investors</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Add Investor</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Send SMS to All Investors</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Send Email to All Investors</h5>
                     </li>

                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Invite Investors</h5>
                     </li>
                  </ul>
                  
                </div>

                
                <li
                    onClick={() => handleAccount()}
                    className={`${ account && "hover"}`}
                >
                   {/* <BiSolidBriefcaseAlt2 className="icon"/> */}
                   <FontAwesomeIcon icon={faBriefcase} className='icon' />
                   <h4 style={
                     reduce? {
                        display: "none"
                     } : null
                   }>Investor Accounts</h4>
                
                   
                   { account ? <FontAwesomeIcon icon={faAngleDown} className='left' />
                   :
                   <FontAwesomeIcon icon={faAngleRight} className='left' />
                   }
                </li>

                <div className="anga">
                  <ul className={`borrowers ${ account && "repay-toggle"}`}>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>View All Investor Accounts</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Add Investor Account</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>View All Loan Investments</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>View Investors Transactions</h5>
                     </li>

                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Approve Loan Investments</h5>
                     </li>
                  </ul>
                  
                </div>

                
                <li>
                   {/* <GiThorHammer className="icon"/> */}
                   <FontAwesomeIcon icon={faGavel} className='icon' />
                   <h4 style={
                     reduce? {
                        display: "none"
                     } : null
                   }>E-Signatures</h4>
                </li>

                
                <li
                    onClick={() => handlePay()}
                    className={`${ pay && "hover"}`}
                >
                   {/* <FaPaypal className="icon"/> */}
                   <FontAwesomeIcon icon={faPaypal} className='icon' />
                   <h4 style={
                     reduce? {
                        display: "none"
                     } : null
                   }>Payroll</h4>
                   
                   { pay ? <FontAwesomeIcon icon={faAngleDown} className='left' />
                   :
                   <FontAwesomeIcon icon={faAngleRight} className='left' />
                   }
                </li>

                <div className="anga">
                  <ul className={`borrowers ${ pay && "pay-toggle"}`}>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>View Payroll</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Add Payroll</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Payroll Report</h5>
                     </li>
                   
                  </ul>
                  
                </div>

                
                <li
                    onClick={() => handleExpense()}
                    className={`${ expense && "hover"}`}
                >
                   {/* <FaShare className="icon"/> */}
                   <FontAwesomeIcon icon={faShare} className='icon' />
                   <h4 style={
                     reduce? {
                        display: "none"
                     } : null
                   }>Expenses</h4>
               
                   
                   { expense ? <FontAwesomeIcon icon={faAngleDown} className='left' />
                   :
                   <FontAwesomeIcon icon={faAngleRight} className='left' />
                   }
                </li>

                <div className="anga">
                  <ul className={`borrowers ${ expense && "expense-toggle"}`}>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>View Expenses</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Add Expenses</h5>
                     </li>    
                  </ul>
     
                </div>

                
                
                <li
                    onClick={() => handleOther()}
                    className={`${ other && "hover"}`}
                >
                   {/* <FaPlus className="icon"/> */}
                   <FontAwesomeIcon icon={faPlus} className='icon' />
                   <h4 style={
                     reduce? {
                        display: "none"
                     } : null
                   }>Other Income</h4>
                   
                   { other ? <FontAwesomeIcon icon={faAngleDown} className='left' />
                   :
                   <FontAwesomeIcon icon={faAngleRight} className='left' />
                   }
                </li>

                <div className="anga">
                  <ul className={`borrowers ${ other && "expense-toggle"}`}>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>View Other Income</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Add Other Income</h5>
                     </li>    
                  </ul>
     
                </div>


                 
                <li
                    onClick={() => handleAsset()}
                    className={`${ asset && "hover"}`}
                >
                   {/* <BiBriefcaseAlt className="icon"/> */}
                   <FontAwesomeIcon icon={faSuitcase} className='icon' />
                   <h4 style={
                     reduce? {
                        display: "none"
                     } : null
                   }>Asset Management</h4>
                 
                   { asset ? <FontAwesomeIcon icon={faAngleDown} className='left' />
                   :
                   <FontAwesomeIcon icon={faAngleRight} className='left' />
                   }
                </li>

                <div className="anga">
                  <ul className={`borrowers ${ asset && "expense-toggle"}`}>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>View Asset Management</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Add Other Income</h5>
                     </li>    
                  </ul>
     
                </div>

                 
                <li
                    onClick={() => handleReport()}
                    className={`${ report && "hover"}`}
                >
                   {/* <BsGraphUpArrow className="icon"/> */}
                   <FontAwesomeIcon icon={faReceipt} className='icon' />
                   <h4 style={
                     reduce? {
                        display: "none"
                     } : null
                   }>Reports</h4>
                 
                   
                   { report ? <FontAwesomeIcon icon={faAngleDown} className='left' />
                   :
                   <FontAwesomeIcon icon={faAngleRight} className='left' />
                   }
                </li>

                
                <div className="anga">
                  <ul className={`borrowers ${ report && "loan-toggle"}`}>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Borrowers Report</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Loan Report</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Loan Arrears Aging Report</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Collections Report</h5>
                     </li>

                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Collector Report (Staff)</h5>
                     </li>

                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Deferred Income</h5>
                     </li>

                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Deferred Income Monthly</h5>
                     </li>
                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                        <h5>Pro-Rata Collections Monthly</h5>
                     </li>
                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                        <h5>Disbursement Report</h5>
                     </li>
                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Fees Report</h5>
                     </li>
                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Loan Officer Report</h5>
                     </li>
                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Loan Products Report</h5>
                     </li>

                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>MFSR Ratios</h5>
                     </li>

                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Monthly Report</h5>
                     </li>

                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Outstanding Report</h5>
                     </li>

                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Portfolio At Risk (PAR)</h5>
                     </li>

                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>At a Glance Report</h5>
                     </li>

                     
                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>All Entries</h5>
                     </li>


                  </ul>
                  
                </div>


                 
                <li
                    onClick={() => handleAccounting()}
                    className={`${ accounting && "hover"}`}
                >
                   {/* <SiBookstack className="icon"/> */}
                   <FontAwesomeIcon icon={faBookOpen} className='icon' />
                   <h4 style={
                     reduce? {
                        display: "none"
                     } : null
                   }>Accounting</h4>
               
                   
                   { accounting ? <FontAwesomeIcon icon={faAngleDown} className='left' />
                   :
                   <FontAwesomeIcon icon={faAngleRight} className='left' />
                   }
                </li>

                            
                <div className="anga">
                  <ul className={`borrowers ${ accounting && "loan-toggle"}`}>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Cash flow Accumulated</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Cash flow Monthly</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Profit/Loss</h5>
                     </li>
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Balance Sheet</h5>
                     </li>

                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Trial Balance</h5>
                     </li>

                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>General Ledger Summary</h5>
                     </li>

                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Branch Equity</h5>
                     </li>
                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                        <h5>Reconcile Entries</h5>
                     </li>
                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                        <h5>Chart of Accounts</h5>
                     </li>
                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Manual Journal</h5>
                     </li>
                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Loan Calculator</h5>
                     </li>
                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Guarantors</h5>
                     </li>

                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Loan Comments</h5>
                     </li>

                     
                     <li>
                     <FontAwesomeIcon icon={faCircle} className='icon blue' />
                     <h5>Approve Loans</h5>
                     </li>


                  </ul>
                  
                </div>

                



            </ul>

        </section>
    )
}

export default Sidebar;