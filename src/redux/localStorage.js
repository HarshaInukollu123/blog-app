export const saveToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('reduxState', serializedState);
    } catch (error) {
      console.error('Error saving state to localStorage', error);
    }
  };
  
  export const loadFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('reduxState');
      if (serializedState === null) return undefined; // No previous state
      return JSON.parse(serializedState);
    } catch (error) {
      console.error('Error loading state from localStorage', error);
      return undefined;
    }
  };
  