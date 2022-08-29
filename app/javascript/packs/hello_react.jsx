// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
// import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
// import { createRoot } from 'react-dom/client';

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

// Warning: ReactDOM.render is no longer supported in React 18.
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
// this doesnt work
// function AppWithCallbackAfterRender() {
//   useEffect(() => {
//     console.log('rendered!!');
//   });

//   return <Hello name="React" />
// }

// const container = document.createElement('div');
// const root = createRoot(container);
// root.render(<AppWithCallbackAfterRender />);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
