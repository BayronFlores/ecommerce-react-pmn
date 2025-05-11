interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-center items-center mt-8 space-x-2">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="rounded-md border border-slate-300 py-2 px-3 text-sm shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 disabled:opacity-50"
      >
        ←
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`min-w-9 rounded-md py-2 px-3 text-sm shadow-sm ml-2 ${
            num === currentPage
              ? 'bg-orange-500 text-white'
              : 'border border-slate-300 text-slate-600 hover:text-white hover:bg-slate-800'
          }`}
        >
          {num.toString().padStart(2, '0')}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="rounded-md border border-slate-300 py-2 px-3 text-sm shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 disabled:opacity-50"
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
