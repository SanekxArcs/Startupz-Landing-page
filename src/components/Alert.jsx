import PropTypes from "prop-types";

const Alert = ({ title, message }) => {
  return (
    <div className="fixed top-8 right-8">
      <div
        className="p-4 text-yellow-700 bg-yellow-100 border-l-4 border-yellow-500 rounded-md shadow-xl"
        role="alert"
      >
        <p className="font-bold">{title}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Alert;
