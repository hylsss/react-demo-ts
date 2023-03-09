const InputTest = (props: {
  label: string
  text: string
  onChange: (e: any) => void
}) => {
  return (
    <div>
      <label>
        {props.label} <input value={props.text} onChange={props.onChange} />
      </label>
    </div>
  )
}

export default InputTest
