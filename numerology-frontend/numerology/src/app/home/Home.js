import React from 'react';
import './Home.css';
import LeftTree from '../leftTree/LeftTree';
import SearchBox from '../../component/searchBox/SearchBox';
import StrategyItem from '../strategyItem/StrategyItem';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {strategyItems:[]};
        this.state.strategyItems = [
            {
                author: "ssc",
                context: "这是一条攻略"
            },
            {
                author: "zrt",
                context: "这是另一条攻略"
            }
        ]
    }

    render() {

        const sItems = this.state.strategyItems.map(item => {
          return (<StrategyItem author={item.author} context={item.context} />)
        });

        return (
            <div id='home' className='Home' >
                <div className='Home-leftPanel'>
                    <SearchBox />
                    <LeftTree/>
                </div>
                <div className='Home-rightPanel'>
                    <div className='Home-rightPanel-subject'>策略的主题</div>
                    {sItems}
                </div>
            </div>
          );
    }

}

export default Home;
