import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManger extends Component {
  state = {
    list1: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    showPassword: false,
  }

  searchinput = event => {
    this.setState({searchInput: event.target.value})
  }

  show = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  eventPreventDef = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newItem = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prev => ({
      list1: [...prev.list1, newItem],
      website: '',
      username: '',
      password: '',
    }))
  }

  website = event => {
    this.setState({website: event.target.value})
    console.log(event.target.value)
  }

  username = event => {
    this.setState({username: event.target.value})
    console.log(event.target.value)
  }

  passwordChange = event => {
    this.setState({password: event.target.value})
    console.log(event.target.value)
  }

  deleting = id => {
    const {list1} = this.state
    const filterdata = list1.filter(each => each.id !== id)
    this.setState({list1: filterdata})
  }

  render() {
    const {list1, website, username, password, searchInput} = this.state
    const searched = list1.filter(each =>
      each.website.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="image-logo"
        />
        <div className="container1">
          <form className="form-con" onSubmit={this.eventPreventDef}>
            <h1 className="heading">Add New Password</h1>
            <div className="input-con">
              <div className="inp-img">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  className="inp-imgE"
                  alt="website"
                />
              </div>
              <input
                className="input1"
                type="website"
                placeholder="Enter website"
                onChange={this.website}
                value={website}
              />
            </div>
            <div className="input-con">
              <div className="inp-img">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  className="inp-imgE"
                  alt="username"
                />
              </div>
              <input
                className="input1"
                type="username"
                placeholder="Enter username"
                onChange={this.username}
                value={username}
              />
            </div>
            <div className="input-con">
              <div className="inp-img">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="inp-imgE"
                  alt="password"
                />
              </div>
              <input
                className="input1"
                type="password"
                placeholder="Enter password"
                onChange={this.passwordChange}
                value={password}
              />
            </div>
            <button className="btn" type="submit">
              Add
            </button>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="image-key large"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manger"
              className="image-key small"
            />
          </div>
        </div>
        <div className="sec-container">
          <div className="fst">
            <div className="count">
              <h1 className="para">Your Passwords</h1>
              <p className="round">{searched.length}</p>
            </div>
            <div className="in">
              <div className="inp-im">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  className="imgE"
                  alt="search"
                />
              </div>
              <input
                className="inpu1"
                type="search"
                placeholder="search"
                onChange={this.searchinput}
              />
            </div>
          </div>
          <hr className="line" />

          <div className="check">
            <input type="checkbox" onClick={this.show} id="check" />
            <label className="para" htmlFor="check">
              Show Passwords
            </label>
          </div>
          {true ? (
            <ul className="ul-con">
              {searched.map(each => (
                <PasswordItem
                  key={each.id}
                  details={each}
                  deleting={this.deleting}
                  status={this.state}
                />
              ))}
            </ul>
          ) : null}
          {searched.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              className="image-k"
              alt="no passwords"
            />
          ) : null}
          {searched.length === 0 ? (
            <p className="para para1">No Passwords</p>
          ) : null}
        </div>
      </div>
    )
  }
}
export default PasswordManger
