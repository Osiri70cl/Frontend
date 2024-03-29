import styles from "./Tooltips.module.scss";

interface TooltipsProps {
  payload?: any[];
  active?: boolean;
}

const Tooltips: React.FC<TooltipsProps> = ({ payload, active }) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className={styles.tooltips}>
        <p>{payload[0].value}kg</p>
        <p>{payload[1].value}kcal</p>
      </div>
    );
  }

  return null;
};

export default Tooltips;
