import React from 'react'
import PropTypes from 'prop-types'
import StyledInput, { InputContainer, Prefix, Suffix } from './style'
import Icon from 'components/Icon'
import { useTheme } from 'styled-components'

import { ReactComponent as SearchIcon } from "assets/icon/search.svg"
import InputText from './InputText'

function Input({
    placeholder = "请输入内容...", prefix, suffix, ...rest
}) {
    return (
        <InputContainer {...rest}>
            {prefix && <Prefix>{prefix}</Prefix>}
            <StyledInput placeholder={placeholder} />
            {suffix && <Suffix>{suffix}</Suffix>}
        </InputContainer>
    )
}

function Search({ placeholder = "请输入搜索内容...", ...rest }) {
    const theme = useTheme();
    return (
        <Input
            placeholder={placeholder} color={theme.gray3} prefix={<Icon icon={SearchIcon} width={18} height={18} />}
            {...rest}
        />
    )
}

Input.Search = Search;
Input.Text = InputText;

Input.propTypes = {
    placeholder: PropTypes.string,
    prefix: PropTypes.any,
    suffix: PropTypes.any,
}

export default Input;

