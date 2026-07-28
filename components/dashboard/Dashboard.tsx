import Card from "./Card";

interface CardData {
  title: string;
  children: string;
}

const cards: CardData[] = [
  {
    title: "System Status",
    children: "All Systems Operational",
  },
  {
    title: "Active Projects",
    children: "3",
  },
  {
    title: "Learning Streak",
    children: "7 Days",
  },
  {
    title: "Today's Mission",
    children: "React Component Architecture",
  },
  {
    title: "Tasks Completed",
    children: "4/7",
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col items-baseline gap-4 p-4 flex-1 overflow-y-auto">
      <div className="flex flex-col">
        <h1>Dashboard</h1>
        <div>Your Command Center</div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-4 mt-4">
        {cards.map((card) => (
          <Card title={card.title}>{card.children}</Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
