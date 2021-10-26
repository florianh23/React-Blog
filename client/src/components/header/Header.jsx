import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles color-green">
                <span className="headerTitleSm">vasc.</span>
                <span className="headerTitleLg">sandbox</span>
            </div>
            <img src="https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=874&q=80" alt="" className="headerImg" />
        </div>
    )
}
