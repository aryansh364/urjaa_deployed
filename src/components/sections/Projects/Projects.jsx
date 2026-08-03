import { useState } from 'react';
import { projectsData, projectCategories } from '../../../data/projects';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';
import Card from '../../ui/Card';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white">
      <Container>
        <SectionTitle
          subtitle="Recent Projects"
          title="Explore Recent Projects"
          description="Browse our interactive project gallery across commercial, residential, hybrid, industrial, and specialized renewable energy deployments."
        />

        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="p-0 overflow-hidden" hoverEffect={true}>
              <div className="h-52 relative">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-green-50 via-green-100 to-emerald-100 flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {project.location}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
