import React from 'react';
import PropTypes from 'prop-types';
import { FilterContainer, FilterInput } from '../styles/FilterStyles';

const ContactFilter = ({ filter, handleFilterChange }) => {
  return (
    <FilterContainer>
      Filter shown with:{' '}
      <FilterInput value={filter} onChange={handleFilterChange} />
    </FilterContainer>
  );
};

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default ContactFilter;
