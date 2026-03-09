import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';

const CardContainer = styled(Card)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 16px;
  background: #ffffff;
  padding: 2rem 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
  cursor: default;
  border: none;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: #18216D;
  }

  .role {
    color: #ff825c;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .desc {
    color: #555;
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  .country {
    font-size: 0.85rem;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .flag-icon {
    font-size: 4rem;
    line-height: 1;
    margin-bottom: 1rem;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
  }
`;

interface MemberCardProps {
  name: string;
  role: string;
  country: string;
  flag: string;
  description: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, role, country, flag, description }) => (
  <CardContainer bordered={false}>
    <div className="flag-icon">{flag}</div>
    <h3>{name}</h3>
    <p className="role">{role}</p>
    <p className="desc">{description}</p>
    <p className="country">{country}</p>
  </CardContainer>
);

export default MemberCard;
