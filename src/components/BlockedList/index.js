import React from 'react'
import PropTypes from 'prop-types'
import StyledBlockedList, { BlockedAvatar, BlockedName, ClosableAvatar, CloseIcon, FriendList, SettingsMenu } from './style'
import { ReactComponent as ArrowMenuLeft } from 'assets/icon/arrowMenuLeft.svg'
import { ReactComponent as closeCircle } from 'assets/icon/closeCircle.svg'

import Icon from 'components/Icon'
import Text from 'components/Text'
import face from 'assets/images/face-male-1.jpg';
import { useHistory } from "react-router-dom";
import "styled-components/macro";

function BlockedList({ children, ...rest }) {
    const history = useHistory();
    // const history = useHistory();
    return (
        <StyledBlockedList {...rest}>
            <SettingsMenu>
                <Icon
                    icon={ArrowMenuLeft}
                    css={`
                    cursor: pointer;
                `}
                    onClick={() => history.goBack()}
                />
                <Text size="xxlarge">已屏蔽的好友</Text>
            </SettingsMenu>
            <FriendList>
                {new Array(8).fill(0).map((_, i) => {
                    return (
                        <ClosableAvatar key={i}>
                            <BlockedAvatar size="105px" src={face} />
                            <CloseIcon
                                width={45}
                                height={51}
                                icon={closeCircle}
                            />
                            <BlockedName>李浩</BlockedName>
                        </ClosableAvatar>
                    )
                })}
            </FriendList>
        </StyledBlockedList>
    )
}

BlockedList.propTypes = {
    children: PropTypes.any
}

export default BlockedList;

