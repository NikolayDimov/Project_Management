import Button from "./Button";

export default function ProjectsSidebar({ projects, onStartAddProject, onSelectProject }) {
	return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200s">Your Projects</h2>
			<div>
				<Button onClick={onStartAddProject}>
					New Project
				</Button>
			</div>
			<ul>
				{projects.map((project) => (
					<li key={project.id} className="p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-600"
						onClick={() => onSelectProject(project.id)} >
						{project.title}
					</li>
				))}
			</ul>
		</aside >
	);
};


