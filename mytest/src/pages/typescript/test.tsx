interface SearchFunc {
  (source: string, subString: string): boolean
}

const Test = () => {
  let mySearch: SearchFunc
  mySearch = function (source: string, subString: string) {
    let result = source.search(subString)
    return result > -1
  }

  return <div>123</div>
}

export default Test
