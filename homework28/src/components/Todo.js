import React, { Component } from 'react';

import { Input, Icon, Button, Card,Checkbox, List ,message} from 'antd';
import InfiniteScroll from 'react-infinite-scroller';





export default class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputText : '',
      listItem: [],
      loading: false,
      hasMore: true,


      
    }

    this.handleChangeText = this.handleChangeText.bind(this);

  }

  componentDidMount () {
    // เราควรจะ fetch เพื่อเอาค่ามาจาก MockAPI 
    this.fetchGet();
  }
  

  async fetchGet () {
    const result = await fetch('http://localhost:3001/todos')

    let data = await result.json();

    let listItem = data.map((value, index) => {
      return value.todo_text
    });
    let listItem2 = data;
     
    this.setState({ listItem:listItem2 , isLoading : false})
  }
  async fetchDelete(id) {
  await fetch('http://localhost:3001/todos/'+id, {
      method: 'delete'
    }).then(response =>
      response.json().then(json => {
        return json;
      })
    );
  }

  async fetchPost (text) {

    this.setState({isLoading : true});
    const result = await fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo_text: text
      }),
    })

    if (result.ok) {
      // ท่านี้ก็ได้ดูดีกว่า 1
      let data = await result.json()
      console.log("insertdata "+ data.todo_text);
      let listItem = this.state.listItem.concat(data);
      this.setState({ listItem  })

      // ท่านี้ก็ได้ดูดีกว่า 2
      //this.fetchGet();

    }
    
  }

   deleteListAtIndex = (index,item) => {
    // ไม่ควรทำเพราะเป็นการ Render ใหม่ทั้ง State ถ้ามีเยอะก็ฉิบหายยย สิครับ
    // this.state.listItem.splice(index, 1);
    // this.setState({});
console.log(item);
    const result = this.state.listItem;
    result.splice(index, 1);
    console.log("delete"+ result)
    this.fetchDelete(item)
    console.log(index)
    this.setState({listItem: result});
  }

  submitList = () => {
    this.fetchPost(this.state.inputText);
    this.setState({
      //listItem: this.state.listItem.concat([this.state.inputText]),
      inputText: ''
    })
    //console.log(this.state.listItem);
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.submitList();
    }
  }

  handleChangeText = (event) => {
    this.setState({inputText: event.target.value});
  }

  handleInfiniteOnLoad = () => {
    let data = this.state.listItem;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }

  }

   toggle = (source)  => {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== source)
            checkboxes[i].checked = source.checked;
    }
}
 onChange = (e)=> {
 if(e.target.checked)
 {
  console.log(`checked = ${e.target.value}`);
 }else{
  console.log(`checked = ${e.target.checked}`);
 }
 
}
  render() {
   
    // const data = [
    //     'text 1',
    //     'text 2',
    //     'text 3',
    // ];

    //const { Header, Footer, Sider, Content } = Layout;
    //const Search = Input.Search;
    //const FormItem = Form.Item;

    // หลัง Return มันต้องมี DIV ครอบก่อน
    // { if 1==1 ? 'TRUE' : 'FALSE'}

    return (
        <div>
          { 
             <Card style={{ width: 500 , backgroundColor : this.props.myColor }}>
              <h1>To-do-list</h1>

              <div style={{ marginBottom:'10px'}}>
                <Input
                  addonAfter={<Button type="primary" onClick={this.submitList}>Add</Button>}
                  onChange={this.handleChangeText}
                  value={this.state.inputText}
                  onKeyPress={this.handleKeyPress}/>
              </div>
              <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={ this.state.hasMore}
          useWindow={false}
        >
     
         <Checkbox onChange={this.onChange}>Toggle All</Checkbox>
               <List
                bordered
                dataSource={this.state.listItem}
                renderItem={(item,index) => (    
                 <List.Item actions={[<a onClick={() => this.deleteListAtIndex(index,item.id)}><Icon type="close-circle" style={{ fontSize: 16, color: 'rgb(255, 145, 0)' }} /></a>]}>     
            {/* <input type="checkbox" name="packersOff" value={index}/> */}
            
            
            <Checkbox 
            value={item.todo_text}    

        onChange={this.onChange} style={{marginRight:"16px"}} />
           {item.todo_text} 
            
                  </List.Item> 
              )}
             
              />
        </InfiniteScroll>
      </div>
          </Card>
        
        }
          
        </div>
      );
    }

 
}