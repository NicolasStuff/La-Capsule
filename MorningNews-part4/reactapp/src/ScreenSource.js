import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import { List, Avatar} from 'antd';
import Nav from './Nav'

function ScreenSource() {

  const [sourceList, setSourceList] = useState([])

  const data = [
    {
      title: 'Ant Design Title 1',
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
  ];

  useEffect(() => {
    const APIResultsLoading = async() => {
      const data = await fetch('https://newsapi.org/v2/sources?language=fr&country=fr&apiKey=6c6bee1ce48d4209977092364da8c990')
      const body = await data.json()
      setSourceList(body.sources)
    }

    APIResultsLoading()
  }, [])

  return (
    <div>
        <Nav/>
       
        <div className="Banner">
          <div className="containerFlags">
            <img src="../images/france.png" className="france"></img>
            <img src="../images/england.png" className="england"></img>
          </div>
        </div>

       <div className="HomeThemes">
          
              <List
                  itemLayout="horizontal"
                  dataSource={sourceList}
                  renderItem={source => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={`/images/${source.category}.png`} />}
                        title={<Link to={`/screenarticlesbysource/${source.id}`}>{source.name}</Link>}
                        description={source.description}
                      />
                    </List.Item>
                  )}
                />


          </div>
                 
      </div>
  );
}

export default ScreenSource;
