import { andamioConfig } from "../../andamio/config";

export function DataBox(props: { value: number; label: string }): JSX.Element {
  return (
    <div className="stats shadow text-center border border-gray-400 rounded-lg">
      <div className="stat bg-primary rounded-lg">
        <div className="stat-value text-success text-5xl pb-2">{props.value}</div>
        <div className="stat-title text-primary-content">{props.label}</div>
        <div className="stat-desc text-primary-content">in {andamioConfig.title}</div>
      </div>
    </div>
  );
}
