import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Select from 'react-select';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsSummary } from 'redux/statistics/statisticsOperations';
import {
  categoriesSummary,
  expenseSummary,
  incomeSummary,
} from 'redux/statistics/statisticsSelectors';
import s from '../Wallet/Statistics.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
  const stateStatistics = useSelector(categoriesSummary);
  const expense = useSelector(expenseSummary);
  const income = useSelector(incomeSummary);

  const [selectedMounth, setSelectedMounth] = useState(null);
  const [selectedYear, setSelectedYear] = useState({
    value: '2022',
    label: '2022',
  });

  const dispatch = useDispatch();
  let dataStatistics = [];

  useEffect(() => {
    const timeSelected = {
      month: selectedMounth ? selectedMounth.value : 0,
      year: selectedYear.value,
    };

    dispatch(getTransactionsSummary(timeSelected));
  }, [selectedMounth, selectedYear, dispatch]);

  const optionsMounth = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
    { value: '', label: 'All' },
  ];
  const optionsYear = [
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
    { value: '2019', label: '2019' },
    { value: '2018', label: '2018' },
  ];

  const data = {
    labels: [],
    datasets: [
      {
        // label: '# of Votes',
        data: dataStatistics,
        backgroundColor: [
          'rgba(254, 208, 87, 1)',
          'rgba(255, 216, 208, 1)',
          'rgba(253, 148, 152, 1)',
          'rgba(197, 186, 255, 1)',
          'rgba(110, 120, 232, 1)',
          'rgba(74, 86, 226, 1)',
          'rgba(129, 225, 255, 1)',
          'rgba(36, 204, 167, 1)',
          'rgba(0, 173, 132, 1)',
        ],
        borderColor: [],
        borderWidth: 0,
      },
    ],
  };

  const TableData = () => {
    const isData = stateStatistics.length;
    return isData ? (
      <table className={s.table}>
        <thead>
          <tr className={s.tableHead}>
            <th className={s.tableCategory}>Category</th>
            <th className={s.tableSumm}>Sum</th>
          </tr>
        </thead>
        <tbody>
          {stateStatistics.map(({ name, type, total }) => {
            dataStatistics.push(total);
            // data.labels.push(name);
            return type !== 'INCOME' ? (
              <tr className={s.tableTr} key={name}>
                <td className={s.tableCategory}>{name}</td>
                <td className={s.tableSumm}>{total}</td>
              </tr>
            ) : null;
          })}
        </tbody>
        <tfoot>
          <tr className={s.tableTr}>
            <td className={s.tableCategory}>Expenses:</td>
            <td className={s.tableSummExpence}>{expense}</td>
          </tr>
          <tr className={s.tableTr}>
            <td className={s.tableCategory}>Income:</td>
            <td className={s.tableSummIncome}>{income}</td>
          </tr>
        </tfoot>
      </table>
    ) : (
      <h2>Sorry</h2>
    );
  };
  return (
    <div className={s.container}>
      <h1 className={s.statisticsHeading}>Statistics</h1>
      <div className={s.statisticsBox}>
        <div className={s.canvasBox}>
          <h2 className={s.canvasSumm}>₴ 24.00</h2>
          <Doughnut data={data} />
        </div>
        <div>
          <div className={s.selectBox}>
            <Select
              className={s.select}
              onChange={setSelectedMounth}
              options={optionsMounth}
              placeholder="Mounth"
            />
            <Select
              className={s.select}
              onChange={setSelectedYear}
              options={optionsYear}
              placeholder="Year"
            />
          </div>
          <TableData />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
