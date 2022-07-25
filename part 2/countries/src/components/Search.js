export const Search = ({ search, setSearch, setShow }) => {
  return (
    <div>
      <label>
        find countries:
        <input
          type="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShow(false);
          }}
        />
      </label>
    </div>
  );
};
