/* eslint-disable jsx-a11y/accessible-emoji */
import Emoji from "components/Emoji";
import VoiceMessage from "components/VoiceMessage";
import React from "react";
import ChatBubble from ".";


export default {
    title: "UI 组件/ChatBubble",
    component: ChatBubble,
    decorators: [storyFn => <div style={{ padding: "24px" }}>{storyFn()}</div>]
};

export const FromOther = () => (
    <ChatBubble time="昨天 下午14:26">这是一条其他人发送的聊天记录</ChatBubble>
);

export const Mine = () => (
    <ChatBubble type="mine" time="昨天 下午16:30">
        这是一条我自己发送的聊天记录
        <Emoji label="smile">😀</Emoji>
    </ChatBubble>
);

export const VoiceMessageType = () => (
    <ChatBubble time="昨天 下午16:30">
        <VoiceMessage time="01:24" />
    </ChatBubble>
);

export const VoiceMessageTypeMine = () => (
    <ChatBubble type="mine" time="昨天 下午16:30">
        <VoiceMessage type="mine" time="01:24" />
    </ChatBubble>
);
