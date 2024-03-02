import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);
    const intialInvertment = 
        resultsData[0].valueEndOfYear -
        resultsData[0].interest -
        resultsData[0].annualInvestment;

    return <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Invertment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>investment Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultsData.map((yearData) => {
                const totalInvestment = yearData.valueEndOfYear - yearData.interest * yearData.year - intialInvertment;
                const totalAmountInvested = yearData.valueEndOfYear - totalInvestment

                return (<tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInvestment)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>);
            })}
        </tbody>
    </table>;
}