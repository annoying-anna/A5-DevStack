import TechnologyCard from './TechnologyCard'

export default function TechnologiesSection({ technologies, stack, onAddToStack, onRemoveFromStack }) {
  if (!technologies) {
    return (
      <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-brand-pink border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-400 text-lg">Loading technologies...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Explore <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Browse our curated collection of modern development tools and platforms.
            Click &quot;Add to Stack&quot; to start building your perfect combination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <TechnologyCard
              key={tech.id}
              tech={tech}
              isInStack={stack.some((item) => item.id === tech.id)}
              onAdd={onAddToStack}
              onRemove={onRemoveFromStack}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
