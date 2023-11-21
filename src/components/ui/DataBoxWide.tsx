import { andamioConfig } from "../../andamio/config";

export function DataBoxWide(props: { value: number; label: string }): JSX.Element {
  return (
    <div className="stats shadow border border-gray-400 rounded-sm">
      <div className="stat bg-primary rounded-sm grid grid-cols-3 gap-3">
        <div className="col-span-1 flex content-center justify-center">
          <div className="stat-value text-success text-2xl my-auto">{props.value}</div>
        </div>
        <div className="col-span-2">
          <div className="stat-title text-primary-content">{props.label}</div>
          <div className="stat-desc text-primary-content">in {andamioConfig.title}</div>
        </div>
      </div>
    </div>
  );
}
