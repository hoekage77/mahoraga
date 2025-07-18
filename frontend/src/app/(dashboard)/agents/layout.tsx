import { agentPlaygroundFlagFrontend } from '@/flags';
import { isFlagEnabled } from '@/lib/feature-flags';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Agent Conversation | Kage Xera',
  description: 'Interactive agent conversation powered by Kage Xera',
  openGraph: {
    title: 'Agent Conversation | Kage Xera',
    description: 'Interactive agent conversation powered by Kage Xera',
    type: 'website',
  },
};

export default async function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
