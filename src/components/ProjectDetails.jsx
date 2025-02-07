export default function ProjectDetails({ project }) {
    if (!project) {
        return <p className="p-4">No project selected.</p>;
    }

    return (
        <div className="w-[35rem] p-4 border rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
            <p className="text-gray-500 mt-2"><strong>Due Date:</strong> {project.dueDate}</p>
        </div>
    );
}
