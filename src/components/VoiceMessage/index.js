import React from 'react'
import PropTypes from 'prop-types'
import StyledVoiceMessage from './style'
import Button from 'components/Button'
import Icon from 'components/Icon'

import {ReactComponent as Play} from 'assets/icon/play.svg';
import {ReactComponent as Wave} from 'assets/icon/wave.svg';
import theme from 'theme'
import Text from 'components/Text'

function VoiceMessage({
    children, time, type, ...rest
}) {
    return (
        <StyledVoiceMessage type={type} {...rest}>
            <Button size="40px">
                <Icon
                    icon={Play}
                    color="white"
                    width="14"
                    height="16"
                    style={{ transform: "translateX(1px)" }}
                />
            </Button>
            <Icon icon={Wave} width="100%" height="100%" color={theme.primaryColor} />
            <Text bold>{time}</Text>
        </StyledVoiceMessage>
    )
}

VoiceMessage.propTypes = {
    children: PropTypes.any,
    type: PropTypes.oneOf(["mine"]),
    time: PropTypes.string,
}

export default VoiceMessage;

