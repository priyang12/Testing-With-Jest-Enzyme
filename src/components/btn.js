import PropTypes from 'prop-types';
import { Fragment } from 'react';

const btn = ({ buttonText, emitEvent }) => {
  const submit = () => {
    emitEvent();
  };
  return (
    <Fragment>
      <button data-test='buttonComponent' onClick={submit}>
        {buttonText}
      </button>
    </Fragment>
  );
};
btn.protoType = {
  buttonText: PropTypes.string.isRequired,
  emitEvent: PropTypes.func.isRequired,
};
export default btn;
