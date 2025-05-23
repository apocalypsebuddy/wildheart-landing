import { notFound } from "next/navigation";
import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { Cta } from "@/components/Cta";
import projects from "../../../public/data/projects.json";

// Simulate fetching a single project by slug
async function getProject(slug: string) {
  return projects.find((project: any) => project.slug === slug);
}

// Props containing params
async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
  const projectContent = project ? project.content.split("\n") : "";

  if (!project) {
    notFound(); // Show 404 if the project is not found
  }

  return (
    <div className="container mx-auto lg:px-16 xl:px-24 py-2">
      {/* Main Image */}
      <div className="mb-10">
        <Image
          src={project.mainImage}
          alt={project.title}
          width={1200}
          height={600}
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>

      <SectionTitle preTitle={project.title}></SectionTitle>

      {/* Project Content with Inline Images */}
      <div className="space-y-6 text-gray-700 leading-relaxed">
        {/* Dynamic content paragraphs */}
        {project.content.split("\n").map((paragraph: string, index: number) => (
          <p key={index} className="mb-6 dark:text-gray-50">
            {paragraph}
          </p>
        ))}

        {/* Optional images inline */}
        {project.images && project.images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {project.images.map((image: string, index: number) => (
              <div key={index} className="w-full h-auto">
                <Image
                  src={image}
                  alt={`Project Image ${index + 1}`}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Call to Action */}
      <Cta />
    </div>
  );
}

async function generateStaticParams() {
  return projects.map((project: any) => ({
    slug: project.slug,
  }));
}

export { generateStaticParams };
export default ProjectPage;
