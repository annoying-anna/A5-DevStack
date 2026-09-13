export default function TechnologyCard({ tech, isInStack, onAdd, onRemove }) {
  const categoryColors = {
    Frontend: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    Backend: 'bg-green-500/10 text-green-400 border border-green-500/20',
    Database: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
    Language: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
    Styling: 'bg-pink-500/10 text-pink-400 border border-pink-500/20',
    DevOps: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
    Tools: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
  }

  const difficultyColors = {
    'Beginner-Friendly': 'text-green-400',
    Intermediate: 'text-yellow-400',
    Advanced: 'text-red-400',
  }

  const badgeColors = {
    Popular: 'bg-brand-orange/20 text-brand-orange',
    Essential: 'bg-blue-500/20 text-blue-400',
    Fast: 'bg-green-500/20 text-green-400',
    Containers: 'bg-cyan-500/20 text-cyan-400',
    'Top SQL': 'bg-yellow-500/20 text-yellow-400',
    NoSQL: 'bg-emerald-500/20 text-emerald-400',
    Design: 'bg-pink-500/20 text-pink-400',
    'State Mgmt': 'bg-purple-500/20 text-purple-400',
    Cloud: 'bg-violet-500/20 text-violet-400',
  }

  return (
    <div className="card-tech rounded-2xl p-6 flex flex-col gap-4">
      {/* Icon & Badge Row */}
      <div className="flex items-start justify-between">
        <img
          src={tech.icon}
          alt={`${tech.name} logo`}
          className="w-12 h-12 object-contain"
        />
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColors[tech.badge] || 'bg-white/10 text-gray-300'}`}>
          {tech.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-white">{tech.name}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed flex-1">
        {tech.description}
      </p>

      {/* Meta info */}
      <div className="flex flex-wrap gap-2 pt-2">
        <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColors[tech.category] || 'bg-white/10 text-gray-300'}`}>
          {tech.category}
        </span>
        <span className={`text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10`}>
          {tech.difficulty}
        </span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < Math.floor(tech.rating) ? 'text-yellow-400' : 'text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-gray-400 text-sm ml-1">{tech.rating}</span>
      </div>

      {/* Add / Remove Button */}
      {isInStack ? (
        <button
          onClick={() => onRemove(tech.id)}
          className="w-full mt-auto border border-white/20 text-gray-300 font-semibold py-2.5 rounded-xl text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Remove from Stack
        </button>
      ) : (
        <button
          onClick={() => onAdd(tech)}
          className="w-full mt-auto btn-gradient text-white font-semibold py-2.5 rounded-xl text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add to Stack
        </button>
      )}
    </div>
  )
}
