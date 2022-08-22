import { render } from '@testing-library/react';

import PlainPage from './plain-page';

describe('PlainPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlainPage />);
    expect(baseElement).toBeTruthy();
  });
});
