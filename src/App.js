import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { NewsContextProvider } from './NewsContext';
import News from './components/News';
import SingleNewsStory from './components/SingleNewsStory';

function App() {
  return (
    <NewsContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={News} />
          <Route path="/newspage/:id" component={SingleNewsStory} />
        </Switch>
      </Router>
    </NewsContextProvider>
  )
}

export default App;