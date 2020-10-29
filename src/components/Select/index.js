import React from 'react'
import PropTypes from 'prop-types'
import StyledSelect from './style'
import LabelContainer from 'components/LabelContainer';

function Select({
    children, label, type, ...rest
}) {
    const selectWithoutLabel = (
        <StyledSelect type={type} {...rest}>
            {children}
        </StyledSelect>
    );
    return label ? (
        <LabelContainer label={label}>
            selectWithoutLabel
        </LabelContainer>
    ) : (
        selectWithoutLabel
    )
}

Select.propTypes = {
    type: PropTypes.oneOf(["form"]),
    children: PropTypes.any
}

export default Select;

