export const Filter = ({setFiltred}) => {
  return (
    <div>
      filter shown with: <input onChange={(e) => setFiltred(e.target.value.toLowerCase())} />
    </div>
  );
};
