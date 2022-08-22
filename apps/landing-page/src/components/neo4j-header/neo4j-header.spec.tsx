import { render } from '@testing-library/react';

import Neo4jHeader from './neo4j-header';

describe('Neo4jHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Neo4jHeader />);
    expect(baseElement).toBeTruthy();
  });
});
