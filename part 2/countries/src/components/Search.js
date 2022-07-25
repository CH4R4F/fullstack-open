export const Search = ({ search, setSearch }) => {
  return (
    <div>
      <label>
        find countries:
        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </label>
    </div>
  );
};
