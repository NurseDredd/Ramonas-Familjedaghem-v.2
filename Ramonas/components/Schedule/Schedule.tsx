type ScheduleItem = {
  time: string;
  activity: string;
};

const scheduleItems: ScheduleItem[] = [
  { time: "07:30 - 08:00", activity: "Frukost serveras" },
  { time: "09:00", activity: "Vi går ut" },
  { time: "11:00", activity: "Sångsamling" },
  { time: "11:30", activity: "Lunch" },
  {
    time: "12:30",
    activity: "Vila eller lugnare aktiviteter som att pyssla eller rita",
  },
  { time: "14:00", activity: "Mellanmål" },
  { time: "15:00", activity: "Fri lek, pyssel inne eller ute" },
  { time: "17:00", activity: "Fruktstund" },
];

export default function Schedule() {
  return (
    <div className="flex flex-col items-center mt-10">
      <ol className="relative border-l border-amber-300 ml-3">
        {scheduleItems.map((item) => (
          <li key={item.time + item.activity} className="mb-4 ml-4">
            <div className="absolute w-3 h-3 bg-amber-500 rounded-full -left-1.5 border-2 border-white" />
            <time className="block text-base text-amber-700 font-semibold">
              {item.time}
            </time>
            <p className="text-gray-700 text-base mt-0.5">{item.activity}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
