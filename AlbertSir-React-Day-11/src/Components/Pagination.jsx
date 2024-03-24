const Pagination = ({ page, totalPage, onchange }) => {
  const array = new Array(totalPage).fill(0);
  const buttons = array.map((a, i) => (
    <button
      disabled={page === i + 1}
      style={{ cursor: "pointer" }}
      onClick={() => onchange(i + 1)}
    >
      {i + 1}
    </button>
  ));
  return <div>{buttons}</div>;
};

export default Pagination;
