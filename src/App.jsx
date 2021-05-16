import "./assets/styles/main.scss"
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { MyPollsPage } from "./pages/MyPollsPage";
import { PollStatsPage } from "./pages/PollStatsPage";
import { EditPollPage } from "./pages/EditPollPage";
import { AppHeader } from "./components/AppHeader";
import { VoteablePollPreviewPage } from "./pages/VoteablePollPreviewPage";

export function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={MyPollsPage} />
          <Route exact path="/poll/:id" component={VoteablePollPreviewPage} />
          <Route exact path="/poll/stats/:id" component={PollStatsPage} />
          <Route exact path="/poll/edit/:id?" component={EditPollPage} />
        </Switch>
      </Router>
    </div>
  );
}

