import me from '../me.jpg'

function ProfilePhoto() {
  return (
    <div className='img'>
      <img src={me} alt={me}/>
    </div>
  )
}

export default ProfilePhoto
