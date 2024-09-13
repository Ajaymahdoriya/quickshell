import React, { useEffect } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import KanbanView from './components/KanbanBoard/KanbanView';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllData } from './actions/apiActions';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  return allTickets ? (
    <div style={{ paddingTop: "10px" }}>
      <NavigationBar />
      <hr style={{ marginTop: "10px" }} />
      <KanbanView />
    </div>
  ) : <LoadingSpinner />;
};

export default App;
