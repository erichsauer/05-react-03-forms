import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Articles from './Articles';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Articles_all from '../mock_json/Articles_all.json';
import Articles_query from '../mock_json/Articles_query.json';

const server = setupServer(
  rest.get('https://newsapi.org/v2/top-headlines', (req, res, ctx) => {
    return res(ctx.json(Articles_all));
  }),
  rest.get('https://newsapi.org/v2/everything', (req, res, ctx) => {
    return res(ctx.json(Articles_query));
  })
);

describe('article search app', () => {
  beforeEach(() => server.listen());
  afterAll(() => server.close());

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
      expect(ul).toMatchSnapshot();
    });
  });
});
