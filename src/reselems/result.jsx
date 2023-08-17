import '../css/background.css';
import '../css/results.css';

export default function Result(props){
    const title = props.res.title;
    const link = props.res.link;
    const snippet = props.res.snippet;
    return (
        <div className="result">
            <div className="result-head">
                <div className="result-favicon">S</div>
                <div>
                    <div className="sitename">{title}</div>
                    <div><cite>{link}</cite></div>
                </div>
            </div>
            <div><a href={link}><h3>{title}</h3></a></div>
            <div className="result-blurb">{snippet}</div>
        </div>
    );
}