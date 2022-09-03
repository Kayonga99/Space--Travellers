import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../../../redux/store';
import MissionCard from '../missionCard';
import '@testing-library/jest-dom';

test('@missionCard passing @description props test', () => {
  render(
    <Provider store={store}>
      <MissionCard
        mission={{
          missionId: 'F7709F2',
          missionName: 'Eutelsat',
          description: "Eutelsat S.A. is a European satellite operator. Providing coverage over the entire European continent, the Middle East, Africa, Asia and the Americas, it is the world's third largest satellite operator in terms of revenues.",
          joined: false,
        }}
        key="F7709F2"

      />
    </Provider>,
  );
  const element = screen.getByText(/Eutelsat S.A. is a European satellite operator. Providing coverage over the entire European continent, the Middle East, Africa, Asia and the Americas, it is the world's third largest satellite operator in terms of revenues./i);
  expect(element).toBeInTheDocument();
});
