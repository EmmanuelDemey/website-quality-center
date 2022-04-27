import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { createClient } from '@supabase/supabase-js'
import { useEffect } from 'react';

// Create a single supabase client for interacting with your database 
const supabase = createClient('https://mxkhudlptbfeypahoqpt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14a2h1ZGxwdGJmZXlwYWhvcXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTEwNjIyNjcsImV4cCI6MTk2NjYzODI2N30.9frtUQNlT4LPNFsX1ty3bWMqTgbYFEZ47smE41gG96I')

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  useEffect(() => {
    supabase.from("test").select("id").then(({ data }) => console.log(data))
  }, [])
  return (
    <StyledApp>
      <NxWelcome title="front" />
    </StyledApp>
  );
}

export default App;
