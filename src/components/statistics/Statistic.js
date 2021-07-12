import React from 'react';
import s from './Statistic.module.css';
import PropTypes from 'prop-types';
import { randomColor } from '../../helpers/randomColor';

const Statistic = ({ stats, title }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(({ label, percentage, id }) => (
          <li
            className={s.item}
            key={id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={s.label}> {label}</span>
            <span className={s.percentage}> {percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistic.defaultProps = {
  title: '',
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// label, percentage, id

export default Statistic;
