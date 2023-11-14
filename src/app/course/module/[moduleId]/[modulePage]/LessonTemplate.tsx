import { getSLTText } from "../../../../../lib/course";
import styles from "../../../CoursePage.module.css";
import VideoComponent from "./VideoComponent";
import { TemplateProps } from "./common";

const LessonTemplate = ({ frontmatter, moduleId, page, children }: TemplateProps) => {
  return (
    <div>
      <div className={styles.coursePageContainer}>
        <div className="card bg-secondary text-secondary-content shadow-xl p-5">
          <div>
            <div className={styles.slt}>
              <span className="text-info">SLT {frontmatter.slt}:</span> {getSLTText({ sltId: frontmatter.slt[0] })}
            </div>
          </div>
          {frontmatter.videoURL && (
            <div className="flex justify-center">
              <VideoComponent videoUrl={frontmatter.videoURL} />
            </div>
          )}
          <h1>{frontmatter.description}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LessonTemplate;
