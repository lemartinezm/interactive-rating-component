const CircularButton = (props: any) => {

  return (
    <div style={{
      color: 'hsl(217, 12%, 63%)',
      backgroundColor: 'hsl(216, 12%, 54%)',
      fontSize: '15px',
      fontFamily: 'Overpass',
      fontWeight: '400',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {props.number || props.children}
    </div>
  )
}

export default CircularButton;