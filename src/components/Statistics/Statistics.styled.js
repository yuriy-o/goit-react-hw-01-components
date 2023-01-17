import styled from 'styled-components';

export const Section = styled.section`
  width: 345px;
  min-height: 100%;

  text-align: center;
  padding-top: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 40px;

  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Title = styled.h2`
  font-size: 28px;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;

  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;

  padding: 10px;
  gap: 10px 5px;

  color: white;
`;

export const Label = styled.span``;

export const Percentage = styled.span``;
