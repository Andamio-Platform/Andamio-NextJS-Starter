import courseOutline from "../../../../../andamio/data/course.json";

export default function CompletedModule(props: { moduleId: string }) {
    const moduleTitle = courseOutline.modules.find(module => module.id === props.moduleId)?.title
    return (
    <div className="card p-5 bg-success border border-primary" key={props.moduleId}>
      <p className="font-mono text-xl">{props.moduleId}</p>
      <p className="py-3">{moduleTitle}</p>
    </div>
  );
}
