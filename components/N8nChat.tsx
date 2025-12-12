'use client';

import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export default function N8nChat() {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://shon555.app.n8n.cloud/webhook/1520b71c-df15-44e7-9452-bb33e029d26e/chat',
      mode: 'window', // shows the floating chat button + popup
    });
  }, []);

  return null;
}
