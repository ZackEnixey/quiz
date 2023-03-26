import { FC } from "react";
import "./ProgressBar.scss";

interface IProgressBar {
  currentProgress: number;
  totalQuestions: number;
}

const ProgressBar: FC<IProgressBar> = ({ currentProgress, totalQuestions }) => {
  const progressPercentage = (currentProgress / totalQuestions) * 100;
  const barWidth = progressPercentage > 0 ? progressPercentage + "%" : "0";

  const isMobile = window.innerWidth <= 767;
  const containerWidth = isMobile ? "100%" : "calc(100% - 200px)";
  const containerMargin = isMobile ? "0" : "20px 100px 0 100px";

  return (
    <div className="progress-bar-container" style={{ width: containerWidth, margin: containerMargin }}>
      <div className="progress" style={{ width: barWidth }}></div>
    </div>
  );
};

export default ProgressBar;