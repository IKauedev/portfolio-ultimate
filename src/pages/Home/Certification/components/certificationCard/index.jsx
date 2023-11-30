import { Card, Date, Description, Details, Image, Tag, Tags, Title } from ".";

export function CertificationCard({ certification }) {
  return (
    <Card>
      <Image src={certification.image} />
      <Tags>
        {certification.tags?.map((tag, index) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{certification.title}</Title>
        <Date>{certification.date}</Date>
        <Description>{certification.description}</Description>
      </Details>
    </Card>
  );
}
