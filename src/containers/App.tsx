import * as React from "react";

export interface AppProps {
}

class App extends React.Component<AppProps, { input: string }> {
  constructor(props: AppProps) {
    super(props)
  }


  render() {
    return (<h1>hello</h1>
    )
  }
}

export default App;
