// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { NewsContextProvider } from './NewsContext';
import News from './components/News';
// import SingleNewsStory from './components/SingleNewsStory';
import HomePage from "./components/HomePage";
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading ....</div>
  
  return (
    <>
      <HomePage />
      <NewsContextProvider>
        <News />
       {/* <Router>
         <Switch>
           <Route path="/" exact component={News} />
          <Route path="/newspage/:id" component={SingleNewsStory} />
        </Switch>
      </Router> */}
    </NewsContextProvider>
    </>
  )
}

export default App;