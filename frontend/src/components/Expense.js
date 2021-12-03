import {Bar} from 'react-chartjs-2'

const Expense = () => {
    return(
        <>
        <label className="expenseHeader"><b>Expense</b><br/><label className="subTitle"><b>$ 750,00</b> Money out for this week</label></label>
        <label className="demo">...</label>
        <div className="barChart">
            <Bar 
                data={{
                    labels:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
                    datasets:[{
                        data:[12,19,3,8,14,9,9],
                        backgroundColor:'rgba(110, 117, 218, 0.808)',
                    },],
                }}
                height={150}
                width={500}
                options={{
                    plugins: {
                        legend: {
                          display: false
                        }
                    },
                    maintainAspectRatio:false,
                }}
            />
            
        </div>
        </>
    );
}

export default Expense;