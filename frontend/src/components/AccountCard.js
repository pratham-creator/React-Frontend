
const AccountCard = () => {
    return(
        <div className='account-card row'>
          <div className='row amount-balance'>
            <div className='col-9'>
              <h6 className="card-content">Amount Balance</h6>
            </div>
            <div className='col-3'>
              <h3 className="card-content">VISA</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'><h4 className="card-content">$ 7831,00</h4></div>
          </div><br></br>
          <div className='account-no row'>
            <div className='col-12'>3756 **** **** 9541</div>
          </div>
      </div>
    );
}

export default AccountCard;