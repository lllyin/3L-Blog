import React from 'react';
import PropTypes from 'prop-types';

export default class CodeBlock extends React.PureComponent {
  render() {
    const { language, value } = this.props;

    return (
      <pre>
        <code className={`language-${language}`}>{value}</code>
      </pre>
    );
  }
}

CodeBlock.defaultProps = {
  language: 'js'
};

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string
};
