import netflix from "../images/netflix.jpg"
import bitcoin from "../images/bitcoin.jpg"
import play from "../images/play.png"
import spotify from "../images/spotify.png"

const Transaction = () => {
    return(
        <div className="transaction row">
            <div className="row m-2 mt-3">
                <h5>Latest Transaction</h5>
            </div>
            <div className="row m-2">
                <div className="col-4"><img className="transactionImage" width={30} height={30} src={netflix}/>Netflix</div>
                <div className="col-4"><label className="transactionDate">Apr 29,2.15 pm</label></div>
                <div className="col-4 text-danger"><label className="transactionAmount">-$ 19.00</label></div>
            </div>
            <div className="row m-2 mt-3">
                <div className="col-4"><img className="transactionImage" width={30} src={spotify}/>Spotify</div>
                <div className="col-4"><label className="transactionDate">Apr 29,2.15 pm</label></div>
                <div className="col-4 text-danger"><label className="transactionAmount">-$ 19.00</label></div>
            </div>
            <div className="row m-2 mt-3">
                <div className="col-4"><img className="transactionImage" width={30} src={bitcoin}/>Bitcoin</div>
                <div className="col-4"><label className="transactionDate">Apr 29,2.15 pm</label></div>
                <div className="col-4 text-success"><label className="transactionAmount">+$ 125.00</label></div>
            </div>
            <div className="row m-2 mt-3 mb-4">
                <div className="col-4"><img className="transactionImage" width={30} src={play}/>PlayStation 5</div>
                <div className="col-4"><label className="transactionDate">Apr 29,2.15 pm</label></div>
                <div className="col-4 text-danger"><label className="transactionAmount">-$ 19.00</label></div>
            </div>

        </div>
    );
}

export default Transaction;