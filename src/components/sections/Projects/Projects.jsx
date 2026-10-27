import { memo } from "react";
import { projectsData } from "../../../data/projects";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import Card from "../../ui/Card";

function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <Container>
        <SectionTitle
          subtitle="Recent Projects"
          title="Explore Our Project Portfolio"
          description="Browse our portfolio of completed renewable energy installations across solar, wind, hybrid, and specialized power infrastructure."
        />

        {/* Clean Project Grid — No Category Tabs per PDF */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 md:mt-16">
          {projectsData.map((project) => (
            <div key={project.id} className="animate-fade-in">
              <Card
                className="p-0 overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] border-0 flex flex-col h-full"
                hoverEffect={false}
              >
                {/* Project Image */}
                <div className="h-60 relative overflow-hidden bg-slate-800 shrink-0">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  {project.capacity && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-emerald-600/95 backdrop-blur-md text-white text-xs font-bold rounded-full shadow-md tracking-wider uppercase">
                        {project.capacity}
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col flex-1 bg-white justify-between">
                  <div>
                    <div className="flex items-center text-emerald-600 text-xs font-bold mb-2 uppercase tracking-wide">
                      <svg
                        className="w-3.5 h-3.5 mr-1.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {project.location}
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-snug group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default memo(Projects);
