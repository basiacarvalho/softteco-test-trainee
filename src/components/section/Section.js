import './Section.css';
import PropTypes from 'prop-types';

function Section({children}) {
  return (
    <section className="section">
      {children}
    </section>
  );
}

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
}
