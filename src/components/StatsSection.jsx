export const StatsSection = () => {
  const statistics = [
    { id: 1, stats: '50k', title: 'active users' },
    { id: 2, stats: '200+', title: 'Premium Tools' },
    { id: 3, stats: '4.9', title: 'Rating' }
  ];

  const statisticsElement = statistics.map(item => <div key={item.id} className={`text-center pb-5 px-10 xl:px-31.25 ${item.id === statistics.length ? 'border-none' : 'border-b-2 lg:border-b-0 lg:border-r-2'}`}>
    <h3 className="text-[3.75rem] font-extrabold">{item.stats}</h3>
    <p className="capitalize text-xl">{item.title}</p>
  </div>
  )

  return (
    <div className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col lg:flex-row justify-center gap-4 py-5 lg:py-15 text-white">
      {statisticsElement}
    </div>
  )
}