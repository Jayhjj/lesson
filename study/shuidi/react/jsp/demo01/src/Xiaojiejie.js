import React ,{Component, Fragment} from 'react'
import './style.css'
import XiaoxjiejieItem from './XiaojiejieItem'
 class Xiaoxjiejie extends Component{
     constructor(props){
         super(props)
         this.state = {
             inputValue:'',
             list:["头部按摩","精油推背"]
         }
     }//数据初始化
     
     render(){
         return(
             <Fragment>
                {/* 第一次写注释,className 防止冲突,htmlFor可以定位到文本框 */}
                 <div>
                     <label htmlFor="jay">加入服务：</label>
                     <input id="jay" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                     <button onClick={this.addList.bind(this)}>增加服务</button>
                 </div>
                  <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                // <li 
                                //     key={index+item} 
                                //     onClick={this.deleteItem.bind(this,index)}
                                //     // dangerouslySetInnerHTML = {{__html:item}}
                                // >
                                //     {item}
                                // </li>
                               
                                    <XiaoxjiejieItem 
                                        avname='波多野结衣'
                                        key={index+item}
                                        content={item}
                                        index = {index}
                                        list={this.state.list}
                                        deleteItem={this.deleteItem.bind(this)}
                                    />
                             
                            ) 
                        })
                    }
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
     //增加列表
     addList(){
         this.setState({
             list:[...this.state.list,this.state.inputValue],
             inputValue:''
         })
     }
    //  删除列表,根据索引删除
     deleteItem(index){
        // console.log(index)
        const list = this.state.list//必须声明局部变量进行操作
        list.splice(index,1);//splice删除1个，index下标
        this.setState({//更新
            list:list
        })
     }
 }
 export default Xiaoxjiejie