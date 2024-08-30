import {calculateInvestmentResults, formatter} from '../util/investment'

export default function Result({input}) {


   const resultData =  calculateInvestmentResults(input)

    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Capital</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map(data => {

                return <tr key={data.year}>
                    <td>{data.year}</td>
                    <td>{formatter.format(data.initialInvestment)}</td>
                    <td>{formatter.format(data.valueEndOfYear)}</td>
                    <td>{formatter.format(data.interest)}</td>
                    <td>{formatter.format(data.totalInterstValue)}</td>
                   
                </tr>
            })}
        </tbody>
    </table>
}