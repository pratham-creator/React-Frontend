
import Header from './Header';
import Expense from './Expense';
import Income from './Income';
import UpgradeAccount from './UpgradeAccount';
import AccountCard from './AccountCard';
import Info from './Info';
import Earnings from './Earnings';
import Conversion from './Conversion';
import Transaction from './Transaction';

const AssembleDashBoard = () => {
    return(
        <div className="col-10">
            <div className="row">
              <div className="col-12">
              <Header/>
              </div>
            </div>

            <div className="row">
              <div className="col-8">
                <div className="row">
                  <div className="expense col-6">
                    <Expense/>
                  </div>
                  <div className="expense col-6" id="income">
                    <Income/>
                  </div>
                </div>
                <UpgradeAccount/>
                <Transaction/>
              </div>

              <div className="col-4">
                <AccountCard/>
                <Info/>
                <Earnings/>
                <Conversion/>
              </div>
            </div>

          </div>
    );
}

export default AssembleDashBoard;