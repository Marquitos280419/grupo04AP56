import PropTypes from "prop-types";
import Swal from "sweetalert2";
function SweetAlert({ message, type }) {
  Swal.fire({
    text: message,
    icon: type,
  });

  return null;
}
SweetAlert.propTypes = {
  message: PropTypes.shape({}).isRequired,
  type: PropTypes.shape({}).isRequired,
};
export default SweetAlert;
