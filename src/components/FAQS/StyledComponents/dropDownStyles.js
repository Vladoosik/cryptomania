// Modules
import { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Flex(props) {
  const { index, open } = props;

  return (
    <DropDownStyles $index={index} $open={open}>
      {props.children}
    </DropDownStyles>
  );
}

Flex.propTypes = {
  index: PropTypes.number,
  open: PropTypes.bool,
};

Flex.defaultProps = {
  index: 0,
  open: false,
};

const DropDownStyles = styled.div`
  width: 100%;
  border-bottom: none;
`;

export default memo(Flex);
