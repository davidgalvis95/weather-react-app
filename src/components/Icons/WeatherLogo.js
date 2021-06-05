import * as React from "react"

function weatherLogo(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
            <style>{".prefix__st1{opacity:.2}.prefix__st2{fill:#231f20}"}</style>
            <g id="prefix__Layer_1">
                <circle cx={32} cy={32} r={32} fill="#4f5d73" />
                <g className="prefix__st1">
                    <circle className="prefix__st2" cx={22} cy={24} r={10} />
                </g>
                <circle cx={22} cy={22} r={10} fill="#e0995e" />
                <g className="prefix__st1">
                    <path
                        className="prefix__st2"
                        d="M48.7 36c0-7.7-6.6-14-14.7-14-6.9 0-12.6 4.5-14.2 10.6-4.4.6-7.8 4.3-7.8 8.6 0 4.8 4.1 8.8 9.2 8.8h27.5c4.1 0 7.3-3.1 7.3-7s-3.3-7-7.3-7z"
                    />
                </g>
                <g className="prefix__st1">
                    <path
                        className="prefix__st2"
                        d="M32 22c0-1-.2-2-.4-2.9-6.2.6-11.3 4.9-12.8 10.5-.8.1-1.6.4-2.4.7C18 31.4 19.9 32 22 32c5.5 0 10-4.5 10-10z"
                    />
                </g>
                <path
                    d="M48.7 34c0-7.7-6.6-14-14.7-14-6.9 0-12.6 4.5-14.2 10.6-4.4.6-7.8 4.3-7.8 8.6 0 4.8 4.1 8.8 9.2 8.8h27.5c4.1 0 7.3-3.1 7.3-7s-3.3-7-7.3-7z"
                    fill="#fff"
                />
            </g>
        </svg>
    )
}

export default weatherLogo;