import type { Metadata } from "next";
import Pomodoro from '@/components/Tools/Pomodoro/Pomodoro';

export const metadata: Metadata = {
    title: "Pomodoro Timer",
    description:
        "Boost your productivity with this free Pomodoro Timer. Stay focused with timed work sessions and short breaks using the proven Pomodoro Technique.",
    keywords: [
        "Pomodoro Timer",
        "Focus Timer",
        "Productivity Tool",
        "Work Timer",
        "Pomodoro Technique",
        "Time Management",
        "Study Timer",
    ],
    alternates: {
        canonical: "/tools/pomodoro",
    },
    openGraph: {
        title: "Pomodoro Timer | Ahnaf Abid Nirob",
        description:
            "Boost your productivity with this free Pomodoro Timer. Stay focused with timed work sessions and short breaks.",
        url: "/tools/pomodoro",
    },
    twitter: {
        card: "summary",
        title: "Pomodoro Timer | Ahnaf Abid Nirob",
        description:
            "Boost your productivity with this free Pomodoro Timer. Stay focused with timed work sessions and short breaks.",
    },
};

const page = () => {
    return <Pomodoro />;
};

export default page;
