import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';

import projects from '../../../public/data/projects.json'
import { SectionTitle } from '@/components/SectionTitle';

// Simulate fetching project data
async function getProjects() {
  const res = await fetch('/data/projects.json');
  return res.json();
}

function ProjectsPage() {
  // const projects = use(getProjects());

  return (
    <div className="container mx-auto px-4 py-16">
      {/* <h1 className="text-4xl font-bold mb-8">Projects</h1> */}
      <SectionTitle
        preTitle='Projects'
        title="A look at some achievements and previous projects we've completed"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project: any) => (
        <Link href={`/projects/${project.slug}`} key={project.id}>
          <div className="p-8 mx-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <Image
              src={project.mainImage}
              alt={`Thumbnail for ${project.title}`}
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
            <h2 className="text-2xl font-bold my-4">{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </Link>
      ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
