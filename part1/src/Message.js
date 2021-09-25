const Message = (props) => {
  console.log('props', props)
  return <p style={{ 
    color: props.color,
    fontWeight: 'bolder'
  }}>
    {props.message}
  </p>
}

export default Message;