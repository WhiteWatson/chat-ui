import React from 'react'
import PropTypes from 'prop-types'
import StyledAcatar, { StatusIcon, AvatarClip, AvatarImage } from './style'

function Avatar({
    src, size = '48px', status, statusIconSize = '8px', ...rest
}) {
    return (
        <StyledAcatar {...rest}>
            {status && (
                <StatusIcon status={status} size={statusIconSize}></StatusIcon>
            )}
            <AvatarClip size={size}>
                <AvatarImage src={src} alt="" />
            </AvatarClip>
        </StyledAcatar>
    )
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.string,
    status: PropTypes.oneOf(["online","offline"],),
    statusIconSize: PropTypes.string,
}

export default Avatar

