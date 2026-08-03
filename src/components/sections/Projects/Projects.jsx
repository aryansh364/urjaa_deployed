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
            <Card key={project.id} className="p-0 overflow-hidden group" hoverEffect={false}>
              <div className="h-72 relative">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-100 via-emerald-50 to-green-100 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                    <svg className="w-12 h-12 text-emerald-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
                  <span className="inline-block px-3 py-1 bg-emerald-500/20 backdrop-blur-md text-emerald-100 border border-emerald-500/30 text-xs font-bold rounded-full mb-4 self-start tracking-wide uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-slate-300 text-sm">
                    <svg className="w-4 h-4 mr-1.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
