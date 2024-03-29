import './switcher.css'

const Switcher = () => {
  return (
    <div className="secondsec">
        <div className="mainheader">
          <h1>Features</h1>
          <p>Our aim is to make it quick and easy for you to access your<br/>favourite websites.Your bookmarks sync between your devices<br/>so you can access them on the go.</p>
        </div>
        <div className="midsectionsecond">
          <div className="leftimgsecond">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="536" height="346"><defs><rect id="a" width="536" height="346" rx="8"/></defs><g fill="none" fillRule="evenodd"><mask id="b" fill="#fff"><use xlinkHref="#a"/></mask><use fill="#E8EAF6" fillRule="nonzero" xlinkHref="#a"/><g mask="url(#b)"><path fill="#242A45" d="M-3.53.197h547v59h-547z"/><g transform="translate(22.47 14.197)" fill="#FFF"><circle cx="16" cy="16" r="16" opacity=".245"/><circle cx="477" cy="16" r="16" opacity=".104"/><g transform="translate(47 6)"><rect width="120" height="6" opacity=".75" rx="3"/><rect width="64" height="6" y="14" opacity=".25" rx="3"/></g></g></g><g mask="url(#b)"><g transform="translate(57 93)"><rect width="261" height="316" fill="#FFF" rx="8"/><rect width="128" height="316" x="295" fill="#FFF" rx="8"/><rect width="120" height="6" x="78.47" y="38.197" fill="#242A45" opacity=".5" rx="3"/></g></g><g transform="translate(88.47 115.197)"><circle cx="16" cy="26" r="16" fill="#F98E5D"/><rect width="88" height="6" x="284" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="20" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="40" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="60" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="94" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="114" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="134" fill="#242A45" opacity=".25" rx="3"/><rect width="64" height="6" x="47" y="30" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(88.47 181.197)"><circle cx="16" cy="16" r="16" fill="#6AC6D6"/><rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(88.47 237.197)"><circle cx="16" cy="16" r="16" fill="#A47ED4"/><rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(88.47 293.197)"><circle cx="16" cy="16" r="16" fill="#EC7878"/><rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3"/></g></g></svg>
          </div>
          <div className="bookmarksecond"></div>
          <div className="secondrightsec">
            <h1>Bookmark in one click</h1>
            <p>Organize your bookmarks however you like. Our<br/>simple drag-and-drop interface give you complete<br/>control over how you manage your favourite sites. </p>
            <button className='infobtnsecond'>More Info</button>
          </div>
        </div>
        <div className="listsecond">
        <div className="mainlistsec">
            <ul>
                <li>Simple Bookmarking</li>
                <li>Speedy Searching</li>
                <li>Easy Sharing</li>
            </ul>
          <div className="selectorbox"></div>
          <div className="line"></div>
        </div>
        </div>
      </div>
  )
}

export default Switcher;


