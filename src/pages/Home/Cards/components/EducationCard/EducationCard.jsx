import React from 'react'
import {
    Body,
    Card,
    Date,
    Degree,
    Description,
    Image,
    Name,
    Span,
    Top
} from '.'

export function EducationCard({ education }) {
    return (
        <Card>
            <Top>
                <Image src={education.img} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            <Description>
                <Span>{education.desc}</Span>
            </Description>
        </Card>
    )
}