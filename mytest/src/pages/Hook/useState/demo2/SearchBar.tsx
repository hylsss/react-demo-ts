const SearchBar = (props: {
  query: string
  handleChange: (e: any) => void
}) => {
  return (
    <label>
      Search: <input value={props.query} onChange={props.handleChange} />
    </label>
  )
}

export default SearchBar
