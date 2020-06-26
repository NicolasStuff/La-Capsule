import React,{ useState, useEffect, setDataStatus } from 'react';
import './App.css';
import { List, Avatar} from 'antd';
import Nav from './Nav'

function ScreenSource() {

  const [sourceList, setsourceList] = useState([])  

  useEffect(  () => {
    async function loadData(){
        var rawResponse = await fetch('http://newsapi.org/v2/sources?language=fr&country=fr&apiKey=6c6bee1ce48d4209977092364da8c990');
        var response = await rawResponse.json();
        //console.log(response.sources);
        setsourceList(response.sources)
        console.log(sourceList);
    }
    loadData()
  }, []);

  const data = [
    {
      title: sourceList,
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

  return (
    <div>
        <Nav/>
       
       <div className="Banner"/>

       <div className="HomeThemes">
          
              <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                    </List.Item>
                  )}
                />


          </div>
                 
      </div>
  );
}

export default ScreenSource;