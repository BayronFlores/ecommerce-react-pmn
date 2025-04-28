const Pagination = () => {
  return (
    <div className="flex justify-center items-center mt-8 space-x-2">
      <button className="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
        ←
      </button>
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <button
          key={num}
          className={`min-w-9 rounded-md py-2 px-3 text-center text-sm transition-all shadow-sm ${
            num === 2
              ? 'bg-orange-500 text-white hover:bg-orange-400 focus:bg-orange-700 hover:shadow-lg focus:shadow-none'
              : 'border border-slate-300 text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
          } ml-2`}
        >
          {num.toString().padStart(2, '0')}
        </button>
      ))}
      <button className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
        →
      </button>
    </div>
  );
};

export default Pagination;
