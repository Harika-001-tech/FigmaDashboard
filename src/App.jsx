import React from 'react';
import './styles/userprofile.css';
import './styles/Sidebar.css'
import UserProfileCard from './components/UserProfileCard';
import ConversationTab from './components/ConversationTab';
import MessageInput from './components/MessageInput';
import ActionLauncher from './components/ActionLauncher';
import SidebarMenu from './components/SidebarMenu';


const App = () => {
  return (
    <div>
      <SidebarMenu />
      <UserProfileCard  />
      <ConversationTab />
      <MessageInput />
      <ActionLauncher />
    </div>
    
  )
}

export default App