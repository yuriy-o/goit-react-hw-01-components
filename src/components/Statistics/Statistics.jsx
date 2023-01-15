import {
  Section,
  Title,
  List,
  ListItem,
  Label,
  Percentage,
} from './Statistics.styled';

import PropTypes from 'prop-types';

export const Statistics = ({ title, data }) => {
  const dataLength = data.length;
  const toUpperTitle = title.toUpperCase();

  return (
    <Section>
      <Title>{toUpperTitle}</Title>

      <List>
        {data.map(({ id, label, percentage }) => {
          return (
            <ListItem
              key={id}
              style={{
                backgroundColor: getRandomHexColor(),
                width: 100 / dataLength + '%',
              }}
            >
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </ListItem>
          );
        })}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ),
};

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
