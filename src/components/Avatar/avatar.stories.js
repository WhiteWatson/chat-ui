import React from "react";
import Avatar from ".";


import face1 from 'assets/images/face-male-1.jpg';
import face2 from 'assets/images/face-male-2.jpg';
import face3 from 'assets/images/face-male-3.jpg';
import face4 from 'assets/images/face-male-4.jpg';

export default {
    title:"UI 组件/Avatar",
    component: Avatar,
};

export const Default = ()=>{
    return <Avatar src={face1} />
}

export const Sizes = () =>{
    return (<div className="row-elements">
        <Avatar src={face1} size="48px"></Avatar>
        <Avatar src={face2} size="56px"></Avatar>
        <Avatar src={face3} size="64px"></Avatar>
        <Avatar src={face4} size="72px"></Avatar>
    </div>)
}

export const WithStatus = () =>{
    return (<div className="row-elements">
        <Avatar src={face1} status="online"></Avatar>
        <Avatar src={face2} status="offline"></Avatar>
        <Avatar src={face3} status="offline" size="72px"></Avatar>
    </div>)
}

