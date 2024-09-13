import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Create Context
const KanbanContext = createContext();

// Initial State
const initialState = {
  tickets: [],
  users: [],
  grouping: 'status',
  ordering: 'priority'
};

// Actions
const SET_TICKETS = 'SET_TICKETS';
const SET_USERS = 'SET_USERS';
const SET_GROUPING = 'SET_GROUPING';
const SET_ORDERING = 'SET_ORDERING';

// Reducer
const kanbanReducer = (state, action) => {
  switch (action.type) {
    case SET_TICKETS:
      return { ...state, tickets: action.payload };
    case SET_USERS:
      return { ...state, users: action.payload };
    case SET_GROUPING:
      return { ...state, grouping: action.payload };
    case SET_ORDERING:
      return { ...state, ordering: action.payload };
    default:
      return state;
  }
};

// Provider Component
export const KanbanProvider = ({ children }) => {
  const [state, dispatch] = useReducer(kanbanReducer, initialState);

  useEffect(() => {
    // Fetch data from API or localStorage
    // Here you would typically dispatch actions to set tickets and users
  }, []);

  const setTickets = (tickets) => dispatch({ type: SET_TICKETS, payload: tickets });
  const setUsers = (users) => dispatch({ type: SET_USERS, payload: users });
  const setGrouping = (grouping) => dispatch({ type: SET_GROUPING, payload: grouping });
  const setOrdering = (ordering) => dispatch({ type: SET_ORDERING, payload: ordering });

  return (
    <KanbanContext.Provider value={{ state, setTickets, setUsers, setGrouping, setOrdering }}>
      {children}
    </KanbanContext.Provider>
  );
};

// Custom Hook
export const useKanban = () => {
  const context = useContext(KanbanContext);
  if (context === undefined) {
    throw new Error('useKanban must be used within a KanbanProvider');
  }
  return context;
};
