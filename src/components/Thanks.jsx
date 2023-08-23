import PropTypes from "prop-types";

const Thanks = ({ message }) => {
  return (
    <div className="fixed z-50 top-8 right-8">
      <div
        className="p-4 text-green-700 bg-green-100 border-l-4 border-green-500 rounded-md shadow-xl animate-fade-in"
        role="alert"
        aria-live="polite"
      >
        <p className="font-bold">{message}</p>
      </div>
    </div>
  );
};

Thanks.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Thanks;
