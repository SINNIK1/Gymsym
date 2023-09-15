import React from 'react';
import {plansData} from '../../data/plansData';
import './Plans.css';
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className="plans-container">
        <div className="blur blur-plans-1"></div>
        <div className="blur blur-plans-2"></div>
      <div className="plans-header" style={{gap: '2rem'}}>
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNERY</span>
        <span className='stroke-text'>NOW WITH US</span>
      </div>
      {/*Plans card*/}
      <div className="plans" id='plans'>
        {plansData.map((plan , i)=>(
            <div className="plan" key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>$ {plan.price}</span>

                <div className="features">
                    {plan.features.map((feature , i)=>(
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span key={i}>{feature}</span>
                        </div>
                    ))}
                </div>

                <div>
                    <span>See more benefits -{'>'}</span>
                </div>
                <button className="btn">Join Now</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Plans