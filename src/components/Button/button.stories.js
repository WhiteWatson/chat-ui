import Icon from "components/Icon";
import React from "react";
import Button from ".";

import {ReactComponent as Plus} from 'assets/icon/plus.svg';


export default {
    title: "UI 组件/Button",
    component: Button,
};

export const RectButton = () => {
    return <Button shape="rect">默认按钮</Button>
}

export const CircleButton = () => {
    return (<Button>
        <Icon icon={Plus} width={12} height={12} />
    </Button>)
}
