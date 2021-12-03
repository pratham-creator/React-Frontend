import {Bar} from 'react-chartjs-2'

const Income = () => {
    return(
        <>
        <label className="expenseHeader"><b>Income</b><br/><label className="subTitle"><b>$ 921,00</b> Income for this week</label></label>
        <label className="demo">...</label>
        <div className="barChart">
            <Bar 
                data={{
                    labels:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
                    datasets:[{
                        data:[4,15,5,8,12,6,9],
                        backgroundColor:'rgba(53, 15, 160, 0.795)',
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

export default Income;