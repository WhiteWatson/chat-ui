import React from "react";
import Emoji from ".";


export default {
    title:"UI 组件/Emoji",
    component: Emoji,
};

export const Default = ()=> (
    <div>
        <Emoji label="smile">😀</Emoji>
        <Emoji label="todo">强 厉害 赞 真棒</Emoji>
        <Emoji label="clock">信件</Emoji>
    </div>
);
