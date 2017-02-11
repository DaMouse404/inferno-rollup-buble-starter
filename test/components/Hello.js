import { render } from 'inferno';
import assert from 'assert';

import Hello from '../../src/components/Hello';

describe('Hello', () => {
  beforeEach(function() {
    const fixture = '<div id="fixture"></div>';

    document.body.insertAdjacentHTML(
      'afterbegin',
      fixture
    );
  });

  afterEach(function() {
    document.body.removeChild(document.getElementById('fixture'));
  });

  it('renders a div with hello world in it', () => {
    const rendered = render(
      <Hello who='world' />,
      document.getElementById('fixture')
    );

    assert.equal(document.getElementById('fixture').innerHTML, '<div>Hello, world!</div>');
  });
});
