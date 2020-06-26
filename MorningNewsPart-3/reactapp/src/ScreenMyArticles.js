import React from 'react';
import './App.css';
import { Card, Icon} from 'antd';
import Nav from './Nav'
import {connect} from 'react-redux';

const { Meta } = Card;

function ScreenMyArticles(props) {


  console.log("props", props.Newarticle);
  return (
    <div>
         
            <Nav/>

            <div className="Banner"/>

            <div className="Card">
                  {props.Newarticle.map((articles,i) => (
                      <div key={i} style={{display:'flex',justifyContent:'center'}}>


                      <Card
                        style={{  
                          width: 300, 
                          margin:'15px', 
                          display:'flex',
                          flexDirection: 'column',
                          justifyContent:'space-between' }}
                        cover={
                        <img
                            alt="example"
                            src={articles.urlToImage}
                        />
                        
                        }
                        
                        actions={[
                          <Icon type="read" key="ellipsis2" />,
                          <Icon type="delete" key="ellipsis" onClick={() => {props.deleteToWishList(articles)}} />
                        ]}
                        >
                          
                        <Meta
                          title={articles.title}
                          description={articles.description}
                        />
                      </Card>

                    </div>  
                  ))}
            </div>
        </div>
  );
}

function mapStateToProps(state) {
  console.log("reception",state);
  return { Newarticle: state.article }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteToWishList: function(article) { 
        dispatch( {type: 'deleteArticle', Newarticle: article})
    }
  }
}
  
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(ScreenMyArticles);

