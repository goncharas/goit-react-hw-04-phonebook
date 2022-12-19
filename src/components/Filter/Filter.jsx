import propTypes from 'prop-types';
import { LabelFilter, InputFilter } from 'components/Filter/Filter.styled';


export const Filter = ({ filter, initialiseFilter }) => (
  <div>
    <LabelFilter>Find contacts by Name </LabelFilter>
    <InputFilter
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={initialiseFilter}
    />
  </div>
);

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  initialiseFilter: propTypes.func.isRequired,
};