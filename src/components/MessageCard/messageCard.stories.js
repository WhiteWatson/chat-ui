import React from "react";
import MessageCard from ".";

import face1 from 'assets/images/face-male-1.jpg';

export default {
    title:"UI 组件/MessageCard",
    component: MessageCard,
};

export const Default = ()=> (
    <MessageCard
        avatarSrc={face1}
        name="李荣浩"
        avatarStatus="online"
        statusText="在线"
        time="3 小时之前"
        message="王者冲冲冲，不赢不罢休！"
        unreadCount={2}
    ></MessageCard>
);

export const Active = ()=> (
    <MessageCard
        avatarSrc={face1}
        name="李荣浩"
        avatarStatus="online"
        statusText="在线"
        time="3 小时之前"
        message="王者冲冲冲，不赢不罢休！"
        unreadCount={2}
        active
    ></MessageCard>
);

export const Replied = ()=> (
    <MessageCard
        avatarSrc={face1}
        name="李荣浩"
        avatarStatus="online"
        statusText="在线"
        time="3 小时之前"
        message="王者冲冲冲，不赢不罢休！"
        unreadCount={2}
        active
        replied
    ></MessageCard>
);

export const RepliedInactive = ()=> (
    <MessageCard
        avatarSrc={face1}
        name="李荣浩"
        avatarStatus="online"
        statusText="在线"
        time="3 小时之前"
        message="王者冲冲冲，不赢不罢休！"
        unreadCount={2}
        replied
    ></MessageCard>
);
