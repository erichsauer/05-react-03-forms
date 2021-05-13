import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Articles from './Articles';

require('dotenv').config();

describe('article search app', () => {
  it('should render relevant articles pertaining to the search', async () => {
    render(<Articles />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).toMatchSnapshot();

    const input = await screen.findByLabelText('News Topic');
    userEvent.type(input, 'hell');

    const button = await screen.findByRole('button', { name: 'search' });
    userEvent.click(button);

    return waitFor(async () => {
      const ul = await screen.findByRole('list', { name: 'articles' });
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
