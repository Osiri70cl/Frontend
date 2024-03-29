import styles from "./SessionsTooltip.module.scss";

interface SessionsTooltipsProps {
  active?: boolean;
  payload?: any[];
}

const SessionsTooltips: React.FC<SessionsTooltipsProps> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className={styles.sessions_tooltips}>{payload[0].value} min</div>
    );
  }

  return null;
};

export default SessionsTooltips;
