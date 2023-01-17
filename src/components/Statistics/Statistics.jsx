import PropTypes from 'prop-types';
import {
  Section,
  Title,
  List,
  ListItem,
  Label,
  Percentage,
} from './Statistics.styled';
import { getRandomHexColor } from '../../utils/getRandomHexColor';

export const Statistics = ({ title, data }) => {
  const dataLength = data.length;

  return (
    <Section>
      {title && <Title>{title}</Title>}

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
      percentage: PropTypes.number.isRequired,
    })
  ),
};
