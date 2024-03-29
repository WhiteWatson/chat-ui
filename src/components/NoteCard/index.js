import React from 'react'
import PropTypes from 'prop-types'
import StyledNoteCard, { NoteExcerpt, NoteImage, NotePublishTime, NoteTitle } from './style'
import note1 from 'assets/images/note-1.jpg';

function NoteCard({
    children, ...rest
}) {
    return (
        <StyledNoteCard {...rest}>
            <NoteImage src={note1} />
            <NoteTitle>这是笔记标题</NoteTitle>
            <NoteExcerpt>这是笔记内容摘要</NoteExcerpt>
            <NotePublishTime>2020-02-08</NotePublishTime>
        </StyledNoteCard >
    )
}

NoteCard.propTypes = {
    children: PropTypes.any
}

export default NoteCard;

