import { SCENARIOS } from '@/lib/simulation-data';
import SimulationClient from './SimulationClient';

// Generate static params for all scenarios (required for static export)
export function generateStaticParams() {
    return SCENARIOS.map((scenario) => ({
        id: scenario.id.toString(),
    }));
}

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function SimulationGamePage({ params }: PageProps) {
    const { id } = await params;
    return <SimulationClient id={id} />;
}
