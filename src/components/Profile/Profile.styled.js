import styled from 'styled-components';

export const Section = styled.div`
  width: 285px;
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
export const Method = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;
export const Description = styled.div``;
export const UserAvatar = styled.img`
  width: 200px;
`;
export const UserName = styled.p`
  font-size: 24px;
  font-weight: bolder;

  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px rgb(82, 82, 82),
    0 0 5px rgb(31, 31, 31);
`;
export const Tag = styled.p``;
export const Location = styled.p``;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;

  list-style: none;
  padding: 0;
  margin: 0;

  background-color: rgb(206, 206, 206);
`;
export const StatsList = styled.li`
  display: flex;
  flex-direction: column;

  padding: 10px;
  width: 24.8%;
  border: 1px solid #3f3f3f;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;
export const Quantity = styled.span``;
