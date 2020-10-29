import React from "react";
import Paragraph from ".";

export default {
    title: "排版/Paragraph",
    component: Paragraph,
};

export const Default = () => (
    <>
        <Paragraph>这是一个段落</Paragraph>
        <Paragraph>这是一个段落</Paragraph>
    </>
)

export const Ellipsis = () => {
    return (
        <Paragraph ellipsis>
            这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落是一个段落这是一个段落这是一个段落这是一个段落
        </Paragraph>
    )
}
