import { memo, useMemo, useState } from "react";
import { projectsData, projectCategories } from "../../../data/projects";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import Card from "../../ui/Card";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.category.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <Container>
        <SectionTitle
          subtitle="Recent Projects"
          title="Explore Recent Projects"
          description="Browse our interactive project gallery across commercial, residential, hybrid, industrial, and specialized renewable energy deployments."
        />

        {/* Search Bar */}

        <div className="max-w-xl mx-auto mt-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by project name, category or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full border border-slate-300 py-4 pl-14 pr-5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
            />

            <svg
              className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
              />
            </svg>
          </div>
        </div>

        {/* Category Buttons */}

        <div className="flex flex-wrap justify-center gap-3 mt-10 md:mt-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ease-in-out border ${
                activeCategory === category
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-[0_8px_20px_rgb(5,150,105,0.35)] scale-105"
                  : "bg-white text-slate-500 border-slate-200 hover:border-emerald-300 hover:text-emerald-600 hover:bg-emerald-50 hover:-translate-y-0.5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredProjects.map((project) => (
              <div key={project.id} className="animate-fade-in">
                <Card
                  className="p-0 overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] border-0"
                  hoverEffect={false}
                >
                  <div className="h-80 sm:h-96 relative">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-slate-100 via-emerald-50 to-emerald-100 flex items-center justify-center transition-transform duration-1000 group-hover:scale-110">
                        <svg
                          className="w-16 h-16 text-emerald-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex flex-col justify-end p-6 sm:p-8 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-block px-3 py-1.5 bg-emerald-500/20 backdrop-blur-md text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-full mb-4 self-start tracking-wider uppercase">
                        {project.category}
                      </span>

                      <h3 className="text-2xl font-extrabold text-white mb-2 leading-tight">
                        {project.title}
                      </h3>

                      <div className="flex items-center text-slate-300 text-sm font-medium">
                        <svg
                          className="w-4 h-4 mr-1.5 opacity-80"
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
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <h3 className="text-3xl font-bold text-slate-700">
              No Projects Found
            </h3>

            <p className="text-slate-500 mt-3">
              Try another search term or choose a different category.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}

export default memo(Projects);
