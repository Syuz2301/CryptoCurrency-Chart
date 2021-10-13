import ReactDOM from 'react-dom';
import Header from './componets/common/header';
import List from './componets/list';
import Detail from './componets/detail';
import Charting from './componets/chartIng/index'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './index.css';

const App = () => { 
    return (
        <div>
            <BrowserRouter>
            <Header />
                <Route path="/" exact  component={List} />
                <Route path="/currency/:id" component={Detail} />
                <Route path="/chart/currency/:id"  component={Charting} />    
            </BrowserRouter> 
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root') )


