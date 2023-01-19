import { render, screen } from '@testing-library/react';
import { fetchApi } from '../../../utils/fetchApi';
import Users from './Users';

// setting up mock for fetchApi 
// mocking a module with an automocked version when needed
jest.mock('../../../utils/fetchApi');

// test suite = group of related test specs
describe('Users', () => {
  /* The following is NOT RECOMMENDED */
  /* 
  it('fetches users via rest api call', async() => {
    render(<Users />);
    const userNameEl = await screen.findByText('Ervin Howell');
    console.log('==============');
    expect(userNameEl).toBeInTheDocument();
    console.log('Execution Ended');
  });
  */

  /* 3 Disadvantages / Challenges in testing the API cals with the above way 
    1. Time Consuming
    2. Data Inconsistency (no guarantee for the sample data like Ervin Howell to be available)
    3. Availability of REST API (may be down or still in dev)
  */

  // Solution: Mocking REST API Data
  // Note: The above test spec should be removed. Only then the following can be tested
  // POSITIVE TEST SPEC 
  it('[MOCKING]: fetches userList properly via API call', async () => {
    // 1. prepare the mock data for the users
    const mockUserList = [
      {
        id: 1,
        name: 'Steve',
        phone: '3453464342'
      },
      {
        id: 2,
        name: 'John',
        phone: '9876531434'
      }
    ];

    // 2. resolve the req with the above mock data
    // 2.1 setup mock for fetchApi (See before describe block)
    // 2.2 resolve the req
    fetchApi.mockResolvedValue(mockUserList);
    // 3. render the comp
    render(<Users />);
    // 4. then, assert
    const userNameEl = await screen.findByText('Steve');
    expect(userNameEl).toBeInTheDocument();
  });

  // NEGATIVE SPEC
  it('[MOCKING]: renders error properly during API Call ', async() => {
    // preparing mock error obj
    const error = 'Error occured';

    fetchApi.mockRejectedValue(error);
    render(<Users />);
    expect(
      await screen.findByText(/Sorry! Unable to fetch users! Try again later./i)
    ).toBeInTheDocument();
  });
});
