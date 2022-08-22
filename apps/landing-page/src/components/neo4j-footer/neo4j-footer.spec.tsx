import { render } from '@testing-library/react';

import Neo4jFooter from './neo4j-footer';

describe('Neo4jFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Neo4jFooter />);
    expect(baseElement).toBeTruthy();
  });
});
