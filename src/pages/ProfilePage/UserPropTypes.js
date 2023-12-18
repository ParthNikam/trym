import PropTypes from 'prop-types';

export const userPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired,
  headerImageURL: PropTypes.string,
  profilePicture: PropTypes.string,
  marks: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      math: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      phsx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      chem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      rank: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ).isRequired,
}).isRequired;
