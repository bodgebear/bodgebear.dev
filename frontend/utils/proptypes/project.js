import PropTypes from 'prop-types';

export const projectPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mainImage: PropTypes.string.isRequired,
  playNowUrl: PropTypes.string,
});
