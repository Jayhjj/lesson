import React ,{Component, Fragment} from 'react'
 class Xiaoxjiejie extends Component{
     constructor(props){
         super(props)
         this.state = {
             inputValue:'jay',
             list:[]
         }
     }//数据初始化
     render(){
         return(
             <Fragment>
                 <div>
                     <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                     <button>增加服务</button>
                 </div>
                 <ul>
                     <li>头部按摩</li>
                     <li>精油推背</li>
                 </ul>
             </Fragment>
         )
     }
     inputChange(e){
        // console.log(this);
        this.setState({
            inputValue:e.target.value
        })
        
     }
 }
 export default Xiaoxjiejie