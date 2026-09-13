export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length
  const labelText =
    count === 0
      ? 'Your Stack'
      : `${count} Technolog${count === 1 ? 'y' : 'ies'} Selected`

  return (
    <div className="sticky top-24 bg-[#14141c] border border-white/10 rounded-2xl p-6 max-h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">{labelText}</h2>
        {count > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-xs text-red-400 hover:text-red-300 font-medium transition-colors underline"
          >
            Remove All
          </button>
        )}
      </div>

      {count === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center py-12 text-center">
          <svg className="w-16 h-16 text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <p className="text-gray-500 text-sm font-medium">Your stack is empty</p>
          <p className="text-gray-600 text-xs mt-1">
            Add technologies from the grid to get started
          </p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto custom-scrollbar space-y-3 pr-1">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl p-3 hover:border-white/10 transition-colors group"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-8 h-8 object-contain flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-semibold truncate">{item.name}</p>
                <p className="text-gray-500 text-xs">{item.category}</p>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="w-7 h-7 flex items-center justify-center rounded-lg bg-white/5 hover:bg-red-500/20 text-gray-500 hover:text-red-400 transition-all flex-shrink-0"
                aria-label={`Remove ${item.name}`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {count > 0 && (
        <div className="mt-6 pt-4 border-t border-white/10">
          <button className="w-full btn-gradient text-white font-semibold py-3 rounded-xl text-sm hover:opacity-90 transition-opacity">
            Export My Stack
          </button>
        </div>
      )}
    </div>
  )
}
