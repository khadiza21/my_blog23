import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img className='sidebarImg' src="https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwY2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repudiandae minima eveniet esse dolore libero sunt, earum ab at necessitatibus accusamus odi.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Islam</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Coding</li>
                    <li className="sidebarListItem">Travel</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className=" sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className=" sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className=" sidebarIcon fa-brands fa-linkedin"></i>
                    <i className=" sidebarIcon fa-brands fa-square-github"></i>

                </div>
            </div>

        </div>

    )
}
