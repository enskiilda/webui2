'use client';

import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [chats, setChats] = useState<Array<{ id: string; title: string }>>([
    { id: '1', title: 'New Chat' }
  ]);

  const handleNewChat = () => {
    const newChat = {
      id: Date.now().toString(),
      title: 'New Chat'
    };
    setChats([newChat, ...chats]);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 transition-all duration-300 z-20 ${
          isOpen ? 'w-64' : 'w-0'
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-700">
            <button
              onClick={handleNewChat}
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
            >
              + New Chat
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  className="px-4 py-2 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors"
                >
                  {chat.title}
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-gray-700">
            <div className="px-4 py-2 text-sm text-gray-400">
              Open WebUI
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={onToggle}
        />
      )}
    </>
  );
}
