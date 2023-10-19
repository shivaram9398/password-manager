import './index.css'

const PasswordItem = props => {
  const {details, deleting, status} = props
  const {id, website, username, password} = details
  const {showPassword} = status
  console.log(showPassword)
  const pro = website.slice(0, 1).toUpperCase()

  const delete1 = () => {
    deleting(id)
  }

  return (
    <li className="list-con">
      <div className="profile">{pro}</div>
      <div className="col">
        <p className="p1">{website}</p>
        <p className="p1">{username}</p>
        <p className="p1">
          {showPassword ? (
            password
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              className="hide-img"
              alt="stars"
            />
          )}
        </p>
      </div>
      <button
        className="delete"
        data-testid="delete"
        type="button"
        onClick={delete1}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="img-del"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
