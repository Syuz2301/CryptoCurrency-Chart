import './index.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faChartLine} from '@fortawesome/free-solid-svg-icons';
const Header = (props) => {
    const {  history } = props;  
    return (
            <div className="Header">
                <Link to="/">
                    <img src={logo} alt="logo" className="Header-logo"/>
                </Link>
                <ul>
                    <li>
                        <Link to="/">
                            <span><FontAwesomeIcon icon={faCoins} size="1x" /></span>Currency
                        </Link>
                    </li>
                    <li>
                        <Link to="/chart/currency/bitcoin">
                            <span><FontAwesomeIcon icon={faChartLine} size="1x"/></span>Chart
                        </Link> 
                    </li>
                </ul>
            </div>        
    );
};
export default withRouter(Header);