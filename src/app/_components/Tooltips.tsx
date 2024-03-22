function Tooltips({ payload, active }) {
  if (active) {
    return (
      <div className="tooltips">
        <p>{payload[0].value}kg</p>
        <p>{payload[1].value}Kcal</p>
      </div>
    );
  }
}

export default Tooltips;
