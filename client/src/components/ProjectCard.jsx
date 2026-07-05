import { ExternalLink, Code } from 'lucide-react';
import CustomButton from './CustomButton';

const Github = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ProjectCard = ({ project }) => {
  const { title, category, description, technologies, features, githubLink, liveLink } = project;

  return (
    <div className="group relative flex flex-col justify-between h-full p-6 rounded-2xl bg-plum-muted/40 border border-girly-lavender/10 hover:border-girly-pink/40 hover:shadow-pink-glow transition-all duration-500 overflow-hidden glass-morphism">
      {/* Background ambient gradient element */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-36 h-36 rounded-full bg-gradient-to-br from-girly-pink/10 to-girly-lavender/10 blur-2xl group-hover:from-girly-pink/20 group-hover:to-girly-lavender/20 transition-all duration-500 pointer-events-none" />
      
      <div>
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-darkBg-primary/80 border border-girly-lavender/20 text-girly-lavender">
            <Code size={12} />
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-offwhite group-hover:text-girly-pink transition-colors duration-300 mb-3 font-sans tracking-wide">
          {title}
        </h3>

        {/* Description */}
        <p className="text-offwhite/70 text-sm mb-5 leading-relaxed font-sans font-light">
          {description}
        </p>

        {/* Features List */}
        {features && features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-girly-lavender/80 mb-2">Key Highlights</h4>
            <ul className="space-y-1.5">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-xs text-offwhite/60">
                  <span className="mr-2 text-girly-pink">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        {/* Technologies Grid */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-[11px] font-medium px-2.5 py-0.8 rounded bg-darkBg-primary border border-girly-lavender/10 text-offwhite/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-girly-lavender/5">
          <CustomButton 
            href={githubLink}
            variant="secondary"
            className="flex-1 py-2 text-xs"
          >
            <Github size={14} className="inline mr-1" />
            GitHub
          </CustomButton>
          
          {liveLink && liveLink !== '#' && (
            <CustomButton 
              href={liveLink}
              variant="outline"
              className="flex-1 py-2 text-xs"
            >
              <ExternalLink size={14} className="inline mr-1" />
              Live Demo
            </CustomButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
