import { render, screen, fireEvent } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { toMatchDiffSnapshot } from 'snapshot-diff';
import Header from './Header';
import '@testing-library/jest-dom';

expect.extend({ toMatchDiffSnapshot });

test('@Header Rockets Navigation', () => {
  const { asFragment } = render(<HashRouter><Header /></HashRouter>);
  fireEvent.click(screen.getByText(/Rockets/));
  const firstRender = asFragment();
  fireEvent.click(screen.getByText(/Rockets/));

  expect(firstRender).toMatchDiffSnapshot(asFragment());
});

test('@Header Missions Navigation', () => {
  const { asFragment } = render(<HashRouter><Header /></HashRouter>);
  fireEvent.click(screen.getByText(/Missions/));
  const firstRender = asFragment();
  fireEvent.click(screen.getByText(/Missions/));
  expect(firstRender).toMatchDiffSnapshot(asFragment());
});

test('@Header My Profile Navigation', () => {
  const { asFragment } = render(<HashRouter><Header /></HashRouter>);
  fireEvent.click(screen.getByText(/My Profile/));
  const firstRender = asFragment();
  fireEvent.click(screen.getByText(/My Profile/));
  expect(firstRender).toMatchDiffSnapshot(asFragment());
});
