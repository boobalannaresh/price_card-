import {faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PriceCard({ data }) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {data.title}
            </h5>

          <h6 className="card-price text-center">
            {data.currency}{data.price}
            <span className="period">{data.period}</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {data.features.map((list)=> {
                return (
                <li className={!list.isEnable ? 'text-muted' : ''}>
                  
                 <span className="fa-li">
                    {/* <i className="fas fa-check"></i> */}
                 
                 
                  {
                    !list.isEnable ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faCheck}/>
                  }
                   </span> 
                 <span>
                  {

                    list.isBold ? <strong> {list.name}</strong> : list.name
                  }
                 </span>
                </li>
                )
              })}
            
          </ul>
          <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">
                Button
                </a>
            </div>
           </div>
           </div>
           </div>
  )     
}

export default PriceCard;