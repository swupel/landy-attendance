import React from 'react';
import { Row, Col } from 'antd';
import MemberCard from './MemberCard';
import teamData from '../../content/TeamContent.json';
import styled from 'styled-components';

const Section = styled.section`
  padding: 8rem 0;
  background: #ffffff;
`;

const TeamBlock: React.FC = () => (
    <Section id="team">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Team</h2>
        <Row gutter={[32, 32]} justify="center">
            {teamData.map((member, idx) => (
                <Col key={idx} xs={24} sm={12} md={8} lg={6} style={{ display: 'flex' }}>
                    <MemberCard
                        name={member.name}
                        role={member.role}
                        country={member.country}
                        flag={member.flag}
                        description={member.description}
                    />
                </Col>
            ))}
        </Row>
    </Section>
);

export default TeamBlock;
