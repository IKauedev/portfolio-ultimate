import React from 'react'
import {
    Avatar,
    Button,
    Card,
    Date,
    Description,
    Details,
    Image,
    Members,
    Tag,
    Tags,
    Title
} from './components'

export function ProjectCards({project,setOpenModal}) {
    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            <Image src={project.image}/>
            <Tags>
                {project.tags?.map((tag, index) => (
                <Tag>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member) => (
                    <Avatar src={member.img}/>
                ))}
            </Members>
            <Button>Clique Aqui</Button>
        </Card>
    )
}