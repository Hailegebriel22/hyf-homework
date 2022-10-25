import React from 'react'
import './App.css';
import HyfRepos from './HyfRepos';
import ReposProvider from './ContextForRepos';
import UserProvider from "./Userscontext"
import ListUser from './ListUser';
function App() {
  return (
    <div className="App">
      <div className='git-Searcher'>
        <UserProvider>
          <ListUser />
        </UserProvider>
      </div>
      <div className='hyf-repos'>
        <ReposProvider>
          <HyfRepos />
        </ReposProvider>
      </div>
    </div>
  );
}

export default App;
