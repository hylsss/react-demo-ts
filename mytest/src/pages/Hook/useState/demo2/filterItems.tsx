interface Typeprops {
  id: number
  name: string
  description: string
}

const FilterItems = (query: string, items: Typeprops[]) => {
  query = query.toLowerCase()
  return items.filter((item) =>
    item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
  )
}

export default FilterItems
