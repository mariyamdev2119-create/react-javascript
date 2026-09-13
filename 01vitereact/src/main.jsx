import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app.jsx";

function MyApp() {
  return (
    <div>
          <h1>Custom App | chai</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: 'Click me yo visit google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement (
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google ',
  anotherUser
)

ReactDOM.createRoot(document.getElementById("root")).
render(

    reactElement
);