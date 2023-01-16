import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 25px;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;

  width: 305px;
  min-height: 100%;

  padding: 10px 15px;
  margin-bottom: 15px;

  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 12px;

  border-radius: 50%;

  background-color: ${props => (props.type === true ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  margin-right: 12px;
`;
export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
