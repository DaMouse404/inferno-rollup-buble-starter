import Inferno from 'inferno';

import Hello from './components/Hello';

Inferno.render(
  <Hello who="World" />,
  document.getElementById("app")
);
